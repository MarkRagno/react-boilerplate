import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './userprofile.scss'

import Store from '../../components/Store/Store.js'
import UserStats from '../../components/UserStats/UserStats.js'


class UserProfile extends React.Component {
	render() {
		return (
		<div styleName="profile-container">

			<div styleName="profile-info">
				<h1>Profile</h1>
				<div styleName="points-container">
					<h2 styleName="perm-points">46</h2>
					<h2 styleName="temp-points">85</h2>
				</div>
				<h3>Name:</h3>
				<h3>Age:</h3>
				<h3>Grade:</h3>
				<h3>Rank:</h3>
				<h3>Quest days remaining:</h3>
			</div>



		</div>
	)}
}

export default CSSModules(UserProfile, styles,  {allowMultiple: true});
