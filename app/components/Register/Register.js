import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './register.scss';


class Register extends React.Component {
  render() {
    return (
      <div styleName="register">
        <section styleName="reg-container">
        <h2>Teacher Sign Up</h2>
          <div styleName="reg-fields">
            <input placeholder="User Code"/>
            <input placeholder="User Name"/>
            <input placeholder="Password"/>
            <input placeholder="Re-Enter Password"/>
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
            <input placeholder="Address1"/>
            <input placeholder="Address2"/>
            <input placeholder="City"/>
            <input placeholder="State"/>
            <input placeholder="Zip"/>
            <input placeholder="Age"/>
            <input placeholder="School"/>
            <div styleName="checkbox-container">
              <input name="terms" type="checkbox"/>
              <label htmlFor="terms" >I accept the <Link styleName="btn" to="Landing">Terms of Use</Link></label>
            </div>
          </div>
          <div styleName="button-container">
            <Link styleName="btn" to="Landing">ENTER NOW</Link>
            <Link to="Enter">Back</Link>
          </div>
        </section>
      </div>
    )
  }
}

export default CSSModules(Register, styles,  {allowMultiple: true});
