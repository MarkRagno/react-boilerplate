import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './footer.scss';


class Footer extends React.Component {
  render() {
    return (
      <div styleName="footer">
        <Link to="Landing">HOW IT WORKS</Link>
        <Link to="Landing">CONTACT US</Link>
      </div>
    )
  }
}

export default CSSModules(Footer, styles,  {allowMultiple: true});
