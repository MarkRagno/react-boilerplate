import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './avatar.scss'

/*images*/
import avatar from '../../images/UserSkins/PLAYER/knight.jpg';


class Avatar extends React.Component {
	render() {
		return (
		<div styleName="avatar-container">
			<img src={avatar} />
		</div>
	)}
}

export default CSSModules(Avatar, styles,  {allowMultiple: true});
