import React from 'react'
//import React components being used in Main

//gets css for main container
import CSSModules from 'react-css-modules'
import styles from '../style/style.scss'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class Main extends React.Component {
  render() {
    return (
      <div styleName="main-container">
        <Header />
        <section styleName="site-container">
          {this.props.children}
        </section>
        <Footer />
      </div>
    )
  }
}

export default CSSModules(Main, styles);
