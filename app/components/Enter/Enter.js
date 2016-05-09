import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './enter.scss'
import Login from '../../components/Login/Login.js'

class Enter extends React.Component {
  render() {
    return (
      <div styleName="hero">
        <h1>KALQUELORD</h1>
        <Login />
      </div>
    )
  }
}

export default CSSModules(Enter, styles,  {allowMultiple: true});
