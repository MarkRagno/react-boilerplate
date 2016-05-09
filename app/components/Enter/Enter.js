import React from 'react'
import { Link } from 'react-router';
import CSSModules from 'react-css-modules'
import styles from './enter.scss'
import Login from '../../components/Login/Login.js'

class Enter extends React.Component {
  render() {
    return (
      <div styleName="hero">

        <Link to="Login">Login</Link>
        <Link to="Register">Register</Link>
      </div>
    )
  }
}

export default CSSModules(Enter, styles,  {allowMultiple: true});
