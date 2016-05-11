import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './studentlogin.scss'


class Login extends React.Component {
  render() {
    return (
      <div styleName="login">
        <section styleName="login-container">
          <input placeholder="User Name"/>
          <input placeholder="Password"/>
          <Link to="ForgotPass">Forgot Password</Link>
          <Link styleName="btn" to="Landing">ENTER NOW</Link>
          <Link to="Enter">Cancel</Link>

        </section>
      </div>
    )
  }
}

export default CSSModules(Login, styles,  {allowMultiple: true});
