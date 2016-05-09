import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './user.scss'

import Avatar from '../../components/Avatar/Avatar.js'
import UserProfile from '../../components/UserProfile/UserProfile.js'


class User extends React.Component {
	render () {
	return (
		<div styleName="user-container">
			<Avatar src={this.props.avatar} />
				<UserProfile username={this.props.username} />
		</div>
	)}
}

export default CSSModules(User, styles,  {allowMultiple: true});
