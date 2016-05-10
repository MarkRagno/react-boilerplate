import React from 'react'
import { Link } from 'react-router';
import CSSModules from 'react-css-modules'
import styles from './enter.scss'

class Enter extends React.Component {
  render() {
    return (
      <div styleName="hero">

        <Link styleName="btn" to="Login">Login</Link>
        <Link styleName="btn" to="Register">Register</Link>
      </div>
    )
  }
}

export default CSSModules(Enter, styles,  {allowMultiple: true});
