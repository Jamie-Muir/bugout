import React from 'react'
import { FaHome, FaProjectDiagram, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import classes from './Sidebar.module.scss';

const iconSize = 30;

function Sidebar() {
	return (
		<nav className={classes.sidebar}>
			<ul>
				<li>
					<Link to='/'>
						<FaHome size={iconSize} />
					</Link>
				</li>
				<li>
					<Link to='/projects'>
						<FaProjectDiagram size={iconSize} />
					</Link>
				</li>
				<li>
					<Link to='/tickets'>
						<FaTicketAlt size={iconSize} />
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Sidebar;