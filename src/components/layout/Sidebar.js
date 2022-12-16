import React from 'react'

import classes from './Sidebar.module.scss';

function Sidebar() {
	return (
		<nav className={classes.sidebar}>
			<ul>
				<li>Home</li>
				<li>Projects</li>
				<li>Issues</li>
				<li>Team</li>
			</ul>
		</nav>
	)
}

export default Sidebar;