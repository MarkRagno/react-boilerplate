import React from 'react';
//import React components being used in Main

//gets css for main container
import CSSModules from 'react-css-modules';
import styles from '../style/style.scss';

class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default CSSModules(Main, styles);
