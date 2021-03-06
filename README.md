<h1 align="center">Find movies</h1>

<p align="center">
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
  </a>
  <a href="http://commitizen.github.io/cz-cli/">
	  <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitzen friendly" />
  </a>
  <a href="https://conventionalcommits.org">
	  <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" />
  </a>
</p>

## Demo: [https://find-movies-app.vercel.app/](https://find-movies-app.vercel.app/)

## Getting started

This is a monorepo repository using [Lerna](https://lerna.js.org/), [Commitzen](http://commitizen.github.io/cz-cli/) and [Conventional Commits](https://conventionalcommits.org) to maintain and manage component versions and for documentation, we use [Storybook](https://storybook.js.org/).

## 🛠 Stack

| ReactJS | Yarn | Lerna |
| :-: | :-: | :-: |
| [![React](docs/images/react.png 'React')](https://reactjs.org/) | [![Yarn](docs/images/yarn.png 'Yarn')](https://yarnpkg.com/) | [![Lerna](docs/images/lerna.png 'Lerna')](https://github.com/lerna/lerna) |
| Jest | Testing Library | Styled Components |
| [![Jest](docs/images/jestlogo.png 'Jest')](https://jestjs.io/en/) | [![TestingLibrary](docs/images/testinglibrary.png 'Testing library')](https://testing-library.com/) | [![StyledComponents](docs/images/styledcomponents.png 'Styled Components')](https://styled-components.com/) |

 ## 🌐 Links

| Name                           | Description                       |
| ------------------------------ | --------------------------------- |
| Storybook                      | [Storybook with components](https://find-movies-storybook.vercel.app/)|
| Design tokens                  | [Design tokens](https://find-movies-storybook.vercel.app/?path=/docs/design-system-colors--page)|
| Front end app                  | [Find movies](https://find-movies-app.vercel.app/) |

## ⚠️ Requirements

 - Node
 - Yarn
 - Lerna

You'll need to create a `.env` file inside `packages/app` with the value below:

```
// packages/app/.env

REACT_APP_API_KEY=HERE_YOUR_API_KEY
```

Link to get your api key: http://www.omdbapi.com/apikey.aspx

## 🚀 Quick start

In the root folder run following commands _(all the below commands need to run on root folder)_:

Install all dependecies with:
```bash
  yarn 
```

To run the front end application [`@monorepo/app`](./packages/app) :
```bash
  yarn start
```

To run all components with storybook  [`@monorepo/ui-components`](./packages/ui-components) :
```bash
  yarn storybook
```

## 🗂 Monorepo structure

| Package                                               | Description                                                                            |
| -------------------------------------------------     | -------------------------------------------------------------------------------------- |
| [`@monorepo/design-tokens`](./packages/design-tokens) | Design tokens (colors, typography, attributes...)                                      |
| [`@common/**`](./packages/commons)                    | Common functions, images, lints (eslint, stylelint, prettier) and other generics setup |
| [`@monorepo/ui-components`](./packages/ui-components) | React library components with [stories](https://storybook.js.org/)                     |
| [`@monorepo/app`](./packages/app)                     | Front end application create with create-react-app                                     |

## 🚨 Code standard

- [JavaScript Standard Style](https://standardjs.com/) - Javascript styleguide
- [Prettier](https://prettier.io/) - Code formatter
- [ESLint](https://eslint.org/) - Lint to quickly find problems
- [Stylelint](https://stylelint.io/) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles

 ## ⌨️ Commands

| Command                        | Description                       |
| ------------------------------ | --------------------------------- |
| `yarn`                         | Install all dependencies          |
| `yarn start`                   | Run frontend app                  |
| `yarn test:ci`                 | Run all tests                     |
| `yarn storybook`               | Run storybook doc components      |
| `yarn watch:tokens`            | Watch design-tokens package       |
| `yarn watch:components`        | Watch ui-components package       |
| `yarn build-app`               | Build of front app([`@monorepo/app`](./packages/app)) and generate a directory with all assets in the following path: `packages/cra/build`      |
| `yarn build-storybook`         | Build of storybook with components([`@monorepo/ui-components`](./packages/ui-components)) and generate a directory with all assets in the following path: `packages/ui-components/public`      |
