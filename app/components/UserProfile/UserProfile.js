import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './userprofile.scss'

import Store from '../../components/Store/Store.js'
import UserStats from '../../components/UserStats/UserStats.js'


class UserProfile extends React.Component {
	render() {
		return (
		<div styleName="profile-container">
			<Store/>
			<div styleName="profile-info">
				<h1>Profile</h1>
			</div>
			<UserStats/>
		</div>
	)}
}

export default CSSModules(UserProfile, styles,  {allowMultiple: true});
