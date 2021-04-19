# en·gram

/ˈenɡram/

noun: engram; plural noun: engrams

> a hypothetical permanent change in the brain accounting for the existence of memory; a memory trace.

---

# Notes

## Log

### BLOCKED/WAITING
- Import Anki Content
  - We need to figure out UI for this now that the original option [can't be done](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker) 
    1) Suggest a path e.g. https://superuser.com/questions/963526/where-does-anki-store-media
    2) Ask to export on Anki, then drag that file into here.

### TODO
- Create card from imported Anki content
  1. Migrate to our schema + save content to client storage
    - Step needs to be fast 
    - Note need to also import the media that's part of the deck
      For test, let's use University of Michigan Heart Sound and Murmur Library. DONE
      
  2. Create amber content - decks + cards
  3. Upload entire folder (ignore .colpkg)
- React Native Web:
  - UI kit? 
- Be able to drag and drop from file system 1
- Emotion/StyledComponent
- Data Store
    - Client
    - Multi-client
    - Offline
- Jest + Enzyme
- MobX / Redux? 
- Auth: https://nextjs.org/docs/authentication 

### DONE
- PWA
- ElasticUI
- TailwindCSS
- Prettier / Eslint using Airbnb
- Sql.js
  - https://github.com/Project-Setup/github_sql_pwa

### Features
- Create Card
- View Card
- Import content from Anki

## Resources
### Emotion
Emotion is a CSS-in-JS library and like any other CSS-in-JS, allows you to write CSS styles with JavaScript.
- https://emotion.sh/docs/ssr#nextjs
- ✅ Use [this](https://emotion.sh/docs/@emotion/native) for react native support.
- ✅ Compatible w/ Typescript


### Next.js + PWA

- https://itnext.io/pwa-with-next-js-create-next-app-in-2020-%EF%B8%8F-9ee0e1a6313d
- https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app

### Lint

- https://github.com/wesbos/eslint-config-wesbos/tree/typescript

### Intellij

https://github.com/wesbos/eslint-config-wesbos/issues/43#issuecomment-652554103

# NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest&project-name=with-typescript-eslint-jest&repository-name=with-typescript-eslint-jest)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
# or
yarn create next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
