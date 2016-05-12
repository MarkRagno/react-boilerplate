import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './store.scss'


class Store extends React.Component {
	render() {
		return (
		<div styleName="store-container">
			<h1>Store</h1>
		</div>
	)}
}

export default CSSModules(Store, styles,  {allowMultiple: true});
