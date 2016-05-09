import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './userstats.scss'


class UserStats extends React.Component {
	render() {
		return (
		<div styleName="stats-container box">
			<h1>Stats</h1>
		</div>
	)}
}

export default CSSModules(UserStats, styles,  {allowMultiple: true});
