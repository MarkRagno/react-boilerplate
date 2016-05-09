import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './login.scss';


class Login extends React.Component {
  render() {
    return (
      <div styleName="login">
        <input placeholder="User Name"/>
        <input placeholder="Password"/>
        <Link to="Landing">ENTER NOW</Link>
      </div>
    )
  }
}

export default CSSModules(Login, styles,  {allowMultiple: true});
