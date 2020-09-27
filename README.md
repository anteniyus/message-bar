# @anteniyus/message-bar

> Simple Material-UI whole Project Snackbar

[![NPM](https://img.shields.io/npm/v/@anteniyus/message-bar.svg)](https://www.npmjs.com/package/@anteniyus/message-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @anteniyus/message-bar
```

## Usage

> First create redux store and import snackbarReducer in your index.js file:
```jsx
import { createStore, applyMiddleware } from 'redux';
import snackbarReducer from './components/Snackbar/SnackbarReducer';

const store = createStore(snackbarReducer, applyMiddleware(thunk));
```
> Then wrap your return statement with Provider and add Snackbar component:
```jsx
import { createStore, applyMiddleware } from 'redux';
import snackbarReducer from './components/Snackbar/SnackbarReducer';
import { Provider } from 'react-redux'; //NEW

const store = createStore(snackbarReducer, applyMiddleware(thunk));

export const ExampleComponent = ({ text }) => {
  return (
    <Provider store={store}> //Add this
      <Snackbar /> //Add this
      ... //Other stuff
    </Provider> //Add this
  )
}
```

>After that in any other components you want to show a message using snackbar you must wrap your component with **SnackbarWrapper**, and use *this.props.showSnackbar('your message', variant)* to show message to user, also variant is one of ['error', 'info', 'success', 'warning'].

```jsx
import React, { Component } from 'react';
import SnackbarWrapper from './components/Snackbar/SnackbarWrapper';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={() => {
          this.props.showSnackbar('This is a sample message', 'error');
        }}
      >
        Click me to show a message bar
      </button>
    );
  }
}

export default SnackbarWrapper(General)

```

```jsx
import React, { Component } from 'react'

import General from './General'

class Example extends Component {
  render() {
    return <General />
  }
}
```

## License

MIT © [Reza](https://github.com/Reza)
