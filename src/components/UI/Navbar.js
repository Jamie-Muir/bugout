import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';

function Navbar() {
	return (
		<nav className={classes.navbar}>
			<div className={classes.navbar_brand}>
				<h1>
					<Link to='/'>
						Bug Out
					</Link>
				</h1>
			</div>
			<ul className={classes.navbar_list}>
				<li><Link to='/projects'>Projects</Link></li>
				<li><Link to='/tickets'>Tickets</Link></li>
				<li><Link to='/login'>Login</Link></li>
			</ul>
		</nav>
	)
}

export default Navbar