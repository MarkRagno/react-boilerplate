import React from 'react';
// import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './header.scss';


class Header extends React.Component {
  render() {
    return (
      <div styleName="header">
        <h1>KALQUELORD</h1>

      </div>
    )
  }
}

export default CSSModules(Header, styles,  {allowMultiple: true});
