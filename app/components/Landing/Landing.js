import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './landing.scss';

import User from '../../components/User/User';

class Landing extends React.Component {
  render() {
    return (
      <div styleName="landing">
        <h1>Grade III KalqueLations</h1>
        <User />
      </div>
    )
  }
}


export default CSSModules(Landing, styles,  {allowMultiple: true});
