import React from 'react'
import styles from './styles.module.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Snackbar from '../src/components/Snackbar/Snackbar'
import snackbarReducer from './components/Snackbar/SnackbarReducer'
import thunk from 'redux-thunk'
import General from './General'

const store = createStore(snackbarReducer, applyMiddleware(thunk))

export const ExampleComponent = ({ text }) => {
  return (
    <Provider store={store}>
      <Snackbar  />
      <General />
      <div className={styles.test}>Example Component: {text}</div>
    </Provider>
  )
}
