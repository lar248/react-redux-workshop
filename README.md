## React-Redux Workshop


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Check out this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) to perform common tasks.

The following 30 exercises are based on Dan Abramov's egghead.io [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) tutorial. Thank you to [Justin Wu's implementation of the exercises](https://medium.com/@justin3737/getting-started-with-redux-dded45556673) from the egghead.io tutorial above.

## Objective
 

The goal of this workshop is to provide basic working knowledge of React and Redux. The concepts and exercises covered here cover only a subset of the features of these libraries, but this should equip you with:

- fluency in the concepts and syntax used in React/Redux development

- a foundation for advancing your understanding of React/Redux

We will build a simple "Todo List" application using these technologies.

We will writing code using the code templates in this repo as a sandbox for following along with the video lessons.



## Setup local dev environment

You must have the following set up locally:
* [NodeJs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/en/)
* IDE/Editor like [VSCode](https://code.visualstudio.com/)

Clone this repo onto your machine:
```sh
git clone https://github.com/lar248/react-redux-workshop.git
```

Go to your project's root directory:
```sh
cd react-redux-workshop/
```

Install your node dependencies using npm (or yarn):
```sh
npm install
```
or
```sh
yarn
```

Run the following to create symbolic links to allow running npm scripts with dependencies from the project's root directory (only installing dependencies once in root).

##### Mac
```sh
source link-all-lessons-deps.sh
```

##### Windows
```sh
source link-all-lessons-deps.bat
```

## React

### Overview

* Lightweight component rendering library [Tutorial](https://facebook.github.io/react/tutorial/tutorial.html#what-is-react) | [Video](https://www.lynda.com/React-js-tutorials/What-React/519668/542812-4.html)

* Virtual DOM rendering [Virtual Dom](https://www.lynda.com/React-js-tutorials/Why-React-so-fast/519668/542813-4.html) | [More](https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130)

* Technically it is a library and not a framework, however we never use just react ['React' is a framework maybe](http://www.sohamkamani.com/blog/2016/11/16/react-is-a-framework/)
  * [Framework vs Library vs Toolkit vs SDK](https://medium.com/@shashvatshukla/framework-vs-library-vs-platform-vs-api-vs-sdk-vs-toolkits-vs-ide-50a9473999db)

### Concepts

* Can describe UI with small composable api: `React.createElement(type, props, children)`

* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) extends JS with HTML like syntax that so you [don't have to use `createElement`](
https://reactjs.org/docs/react-without-jsx.html)

* JS forces us to use `React.createElement`. Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript

* JSX allows expressing UI using familiar HTML syntax, while integrating full power of JS

* [Children with Jsx](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

* React elements are simply lightweight JS objects

* Immutability is important for inexpensive change detection and efficient rendering

* Data flows down via props

* [Embraces composition over inheritance](https://facebook.github.io/react/docs/composition-vs-inheritance.html)

* Relies on many functional paradigms (immutability, functional components, higher-order components)

* [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
  * Facebook does not use inheritance and instead uses [components and props](https://reactjs.org/docs/components-and-props.html)
  * Example
    * [Before composibility](https://codepen.io/gaearon/pen/VKQwEo?editors=0010)
    * [After composibility](https://codepen.io/gaearon/pen/rrJNJY?editors=0010)

* Functional paradigms in React:
  * (Immutability](https://reactjs.org/docs/update.html)
  * [Functional components](https://reactjs.org/docs/components-and-props.html)
  * [Higher-order components](https://reactjs.org/docs/higher-order-components.html)

* Classes vs Functions
  * All React components must act like pure functions with respect to their props.
  * [Pure vs Impure functions](https://egghead.io/lessons/react-redux-pure-and-impure-functions)
* How to [think](https://reactjs.org/docs/thinking-in-react.html) in React

 

## Redux

![redux-diagram](./redux_workflow_diagram.png)


Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

 
### Target app


Before building a UI, it's helpful to draw a sketch of the UI and break it into a component hierarchy.

Below is a rendering of the app we will be building, demonstrating how the UI is composed of hierarchy of "components".


![layout](./complete_app_ui_component_breakdown.png)

For future reference, [Thinking in React][TIR] is a great overview on how to think about composing your UI.

We will build this app using React UI components, and will use Redux to provide the state data into these components.

To run the target app locally, in the terminal, change into the `complete-app` directory and run either `npm start` or `yarn start`.

This will open a browser window to http://localhost:3000/


## Exercises
We will build this app using React UI components, and will use Redux to provide the state data into these components.

### Lessons 1-4


### Lesson 5


### Lesson 6


### Lesson 7


### Lesson 8


### Lessons 9-13


### Lessons 17-19


### Lessons 20-23


### Lessons 24-26


### Lessons 27-30



## Additional Learning

Here are some additional concepts to consider when learning how to build a modern front-end application using React/Redux:
* [Redux vs Alternatives (ie: Flux)](https://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux)
* CSS in JS with [Emotion](https://github.com/emotion-js/emotion)
* Handle asynchronous 'threads' in your react-redux app with [redux-sagas](https://github.com/redux-saga/redux-saga)
* [ES5 vs ES6](https://codeburst.io/es5-vs-es6-with-example-code-9901fa0136fc)
* Generate static assets using [Webpack](https://webpack.js.org/) and transpile ES6 into ES5 using [Babel](https://babeljs.io/) - a [tutorial](https://www.valentinog.com/blog/react-webpack-babel/) for combining React with Babel/Webpack
* Chrome Dev tools
* [Redux Performance](https://redux.js.org/faq/performance)
* Testing
	* Jest
	* https://facebook.github.io/immutable-js/


