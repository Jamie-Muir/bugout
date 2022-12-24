import React from 'react'
import { FaHome, FaProjectDiagram, FaTicketAlt, FaUserFriends } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import classes from './Sidebar.module.scss';

const iconSize = 30;

let activeClassName = 'activeNav';

function Sidebar() {
	return (
		<nav className={classes.sidebar}>
			<ul>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}
					>
						<FaHome size={iconSize} className={classes.icon} />
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/projects'
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}
					>
						<FaProjectDiagram size={iconSize} className={classes.icon} />
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/tickets'
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}
					>
						<FaTicketAlt size={iconSize} className={classes.icon} />
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/users'
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}
					>
						<FaUserFriends size={iconSize} className={classes.icon} />
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Sidebar;