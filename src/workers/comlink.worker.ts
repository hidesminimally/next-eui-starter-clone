import * as Comlink from 'comlink';

export interface WorkerApi {
  getName: typeof getName;
}

const workerApi: WorkerApi = {
  getName,
};

async function getName() {
  console.log('test');
  if (
    typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope
  ) {
    console.log('khuzzah! a worker!');
  } else {
    console.log("kI'm a window... sad trombone.");
  }

  if (self.document) {
    console.log('We are calculating Primes in Main Thread');
  } else {
    console.log('We are calculating Primes in Worker Thread');
  }
  const res = await fetch(
    'https://random-word-api.herokuapp.com/word?number=1'
  );
  const json = await res.json();
  return json[0];
}

Comlink.expose(workerApi);
