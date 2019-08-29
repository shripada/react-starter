
## Tools used
### Framework
This project uses [React JS framework](https://reactjs.org/) for the website development. However, we do not use Create React App tool to create our project, partly due to the high degree of abstraction it brings in, and makes it increasingly harder to configure certain things like Hot Reloading (along with state), or certain toolchains. 

### Package Manager
We prefer [npm](https://www.npmjs.com/) package manager.

### Bundler
We use [webpack](https://webpack.js.org/) tool to bundle the javascript and execute various other toolchains as part of the bundling process.

We have different webpack Configs for Development and Production with the support of **webpack-merge** module. We also use **webpack-dev-server** for serving the bundle locally for development purposes. 

We generate Source Maps through webpack for a Better Debugging Experience with source-map. This is done only in *development* mode

### Transpiling next gen JS and React JSX
We use babel toolchain for transpiling the jsx and modern javascript code. The following babel essential developer dependecies are added.
  * @babel/cli
  * @babel/core
  * @babel/plugin-proposal-class-properties
  * @babel/plugin-syntax-dynamic-import
  * @babel/preset-env
  * @babel/preset-react

You can check how babel is configured in the **.babelrc** file in the root folder of this project.


### Styling support
We use PostCSS toolchain for enabling usage of modern CSS features. For using the CSS inside javascript we use css-loader and style-loader plugins as well. The following PostCSS plugins are be used to enable modern CSS usage:

* postcss: 
* postcss-import
* postcss-loader
* postcss-nested
* postcss-preset-env
* postcss-simple-vars
* postcss-url

You can see the **postcss.config.js** to check how and what order the plugins are being loaded.

### Testing support
We use [Jest](https://jestjs.io/) framework for unit testing purposes along with the [React Testing Library](https://github.com/testing-library/react-testing-library). 

### Linting
ESLint is used for linting purposes and we use the react and eslint recommended rules. You can check the eslint config file .eslintrc.json for details on the configurations being used.

Style linting is supported by [StyleLint](https://github.com/stylelint/stylelint) toolchain. We use the rules defined by [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended) 

### Git pre commit hooks
We use the popular husky pre commit hook tool to automate ensuring the following before a commit can be performed.
* Linting passes
* Code is pretty formatted
* Tests pass

### Component development environment
We use the popular [StoryBook](https://storybook.js.org/) platform for independent development and testing of React Components.

### Package.json scripts
We have defined the following handy scripts that will help invoke various tools, or to launch app in dev mode, or build the final app, etc.

To launch the app in development mode run:
```
npm run dev
```
To run the tests
```
npm run test
```
To run the app in hot reloading mode (via react-hot-reloader):
```
npm run dev-hot
```
To invoke linting of your javascript source files:
```
npm run lint:js
```
To invoke linting of your css source files:
```
npm run lint:css
```
To launch the storybook use:
```
npm run storybook
```


