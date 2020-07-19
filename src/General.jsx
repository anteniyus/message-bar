import React, { Component } from 'react'

import SnackbarWrapper from './components/Snackbar/SnackbarWrapper'

class General extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button
        onClick={(event) => {
          this.props.showSnackbar('test', 'error')
        }}
      >
        Click me
      </button>
    )
  }
}

export default SnackbarWrapper(General)
