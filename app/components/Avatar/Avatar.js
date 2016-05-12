import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './avatar.scss'

import Store from '../../components/Store/Store.js'

/*images*/
import avatar from '../../images/UserSkins/PLAYER/knight.jpg';



class Avatar extends React.Component {
	render() {
		return (
			<div styleName="avatar-section">

				<div styleName="avatar-container">
					<img src={avatar} />
				</div>
				<Store/>
		</div>
	)}
}

export default CSSModules(Avatar, styles,  {allowMultiple: true});
