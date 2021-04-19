import React, { FunctionComponent, useState, useEffect } from 'react';
import initSqlJs from 'sql.js';
// import {
//   EuiFlexGroup,
//   EuiFlexItem,
//   EuiSpacer,
//   EuiText,
//   EuiFilePicker,
// } from '@elastic/eui';
import localforage from 'localforage';
// import * as proto from '../generated/proto';
// import MyComponent from '../components/my_component';
import imageCompression from 'browser-image-compression';
import pako from 'pako';
// import { getName, setItem } from '../workers/comlink.worker.ts';
import { WorkerApi } from '../workers/comlink.worker';
import * as Comlink from 'comlink';

const Index: FunctionComponent = () => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [execResults, setExecResults] = useState(null);
  const [files, setFiles] = useState({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [large, setLarge] = useState(true);
  const [currentSrc, updateSrc] = useState(null);
  const [comlinkMessage, setComlinkMessage] = React.useState('');
  const comlinkWorkerRef = React.useRef<Worker>();
  const comlinkWorkerApiRef = React.useRef<Comlink.Remote<WorkerApi>>();

  const onChange = files => {
    // setFiles(files);
    const r = new FileReader();
    if (files.length > 0 && files[0].name.endsWith('anki2')) {
      // NEed another condition here.
      r.onload = function () {
        // @ts-ignore
        // TODO: Fix lint
        const Uints = new Uint8Array(r.result);
        initSqlJs()
          .then(SQL => setDb(new SQL.Database(Uints)))
          .catch(err => setError(err));
        localforage
          .setItem('db', Uints)
          .then(() => console.log('Set imported Anki content'));
      };
      r.readAsArrayBuffer(files[0]);
    } else {
      console.log(`Beginning to compress and store ${files.length} files`);
      const time1 = Date.now();
      Array.from(files).forEach((file, idx) => {
        if (!file.name.includes('colpkg')) {
          // @ts-ignore
          console.log(`Starting ${idx}: ${file.name}`);
          // console.log('originalFile instanceof Blob', file instanceof Blob); // true
          // @ts-ignore
          // console.log(`originalFile size ${file.size / 1024 / 1024} MB`);

          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            // useWebWorker: true,
          };
          // console.log(file);
          // console.log('originalFile instanceof Blob', file instanceof Blob); // true

          let exists = false;
          localforage.getItem(file.name).then(() => (exists = true));
          if (true) {
            console.log(`uploading ${file.name}`);
            // setItem(file.name, file);
            // localforage.setItem(file.name, file).then(() => {
            //   console.log(`Time took:
            //     ${Math.round(
            //       (((Date.now() - time1) % 86400000) % 3600000) / 60000
            //     )}`); // minutes
            // });
          }
        }

        // This is compression code
        // @ts-ignore
        // imageCompression(file, options).then(function (compressedFile) {
        //   // @ts-ignore
        //   console.log(`Starting ${idx}: ${file.name}`);
        //   console.log(
        //     `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
        //   ); // smaller than maxSizeMB
        //
        //   localforage.setItem('image', compressedFile).then(() => {
        //     console.log(`Set ${compressedFile.name} (idx: ${idx}) in DB`);
        //     console.log(`Time took:
        //         ${Math.round(
        //           (((Date.now() - time1) % 86400000) % 3600000) / 60000
        //         )}`); // minutes
        //   });
        // });
        // .catch(function (error) {
        //   console.log(error.message);
        // });

        // console.log(`Finished ${idx}`);
        // const r = new FileReader();
        // r.onload = function () {
        //   // @ts-ignore
        //   // TODO: Fix lint
        //   // const Uints = new Uint8Array();
        //   const Uints = new Uint8Array(r.result);
        //   // @ts-ignore
        //   console.log(`Pako for file ${file.name}`);
        //   console.log(`Pako before size: ${Uints.byteLength}`);
        //   console.log(`Pako after size: ${pako.deflate(Uints).byteLength}`);
        // };
        // // @ts-ignore
        // r.readAsArrayBuffer(file);
      });
    }
  };

  const renderFiles = () => {
    if (Object.keys(files).length > 0) {
      return (
        <ul>
          {Object.keys(files).map((item, i) => (
            <li key={i}>
              <strong>{files[item].name}</strong> ({files[item].size} bytes)
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p>Add some files to see a demo of retrieving from the FileList</p>
      );
    }
  };

  useEffect(() => {
    localforage.getItem<Uint8Array>('db').then(value => {
      if (!value) {
        return;
      }
      const Uints = new Uint8Array(value);
      initSqlJs()
        .then(SQL => setDb(new SQL.Database(Uints)))
        .catch(err => setError(err));
    });
    localforage.getItem<ArrayBuffer>('053118_polymyositis.png').then(value => {
      if (!value) {
        return;
      }
      const blob = new Blob([value]);
      // console.log(value);
      // console.log(blob);
      const url = URL.createObjectURL(blob);
      console.log(`Load ${url} as src`);
      updateSrc(url);
    });

    // Comlink worker
    // Comlink worker
    comlinkWorkerRef.current = new Worker('../workers/comlink.worker');
    comlinkWorkerApiRef.current = Comlink.wrap<WorkerApi>(
      comlinkWorkerRef.current
    );
    // return () => {
    //   comlinkWorkerRef.current?.terminate();
    // };
  }, []);
  //
  const handleComlinkWork = async () => {
    const msg = await comlinkWorkerApiRef.current?.getName();
    setComlinkMessage(`Comlink response => ${msg}`);
  };

  const exec = sql => {
    try {
      const results = db.exec(sql);
      setExecResults(results);
      setError(null);
    } catch (err) {
      setExecResults(null);
      setError(err);
    }
  };

  /**
   * Renders a single value of the array returned by db.exec(...) as a table
   */
  const ResultTable = ({ columns, values }) => {
    return (
      <table>
        <thead>
          <tr>
            {columns.map(columnName => (
              <td key={columnName}>{columnName}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {values.map((
            row, // values is an array of arrays representing the results of the query
            rowIndex
          ) => (
            <tr key={rowIndex}>
              {row.map((value, cellIndex) => (
                <td key={cellIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // const FilePicker = () => {
  //   return (
  //     <EuiFlexGroup>
  //       <EuiFlexItem grow={2}>
  //         <EuiFilePicker
  //           id="asdf2"
  //           multiple
  //           // Empty strings necessary for reasons I don't understand.
  //           // https://github.com/facebook/react/issues/3468
  //           /* @ts-expect-error */
  //           webkitdirectory=""
  //           directory=""
  //           initialPromptText="Select or drag and drop multiple files"
  //           onChange={files => {
  //             onChange(files);
  //           }}
  //           // display={large ? 'large' : 'default'}
  //           aria-label="Use aria labels when no actual label is in use"
  //         />
  //         <EuiSpacer />
  //       </EuiFlexItem>
  //       {/*<EuiFlexItem>*/}
  //       {/*  <EuiText>*/}
  //       {/*    <h3>Files attached</h3>*/}
  //       {/*    {renderFiles()}*/}
  //       {/*  </EuiText>*/}
  //       {/*</EuiFlexItem>*/}
  //     </EuiFlexGroup>
  //   );
  // };

  const renderCard = () => {
    return (
      <>
        <div>Whatup</div>
      </>
    );
  };
  return db ? (
    <>
      {/*<FilePicker />*/}
      <img id="imagetest" src={currentSrc} alt={'test'} />
      <h1>Next.js SQL interpreter Test</h1>
      <textarea
        onChange={e => exec(e.target.value)}
        placeholder='Enter some SQL. No inspiration ? Try "select sqlite_version()"'
      />
      <pre>{(error || '').toString()}</pre>
      <pre>
        {execResults
          ? execResults.map((execResult, rIndex) => (
              <ResultTable
                key={rIndex}
                columns={execResult.columns}
                values={execResult.values}
              />
            ))
          : ''}
      </pre>
    </>
  ) : (
    <>
      {/*<FilePicker />*/}
      <div>
        <h2>
          Let's use <em>Comlink</em> Web worker!
        </h2>
        <button onClick={handleComlinkWork}>
          fetch random word by Comlink
        </button>
        <p>Result: {comlinkMessage}</p>
      </div>
      <img id="imagetest" src={currentSrc} alt={'test'} />
    </>
  );
};

export default Index;
