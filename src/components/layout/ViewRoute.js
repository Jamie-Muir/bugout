import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';

import '../../index.css';
import Projects from '../../pages/Projects';
import Tickets from '../../pages/Tickets';
import Users from '../../pages/Users';
import ProjectDetails from '../details/ProjectDetails';
import TicketDetails from '../details/TicketDetails';
import UserDetails from '../details/UserDetails';

function ViewRoute() {
	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/' element={ <Dashboard /> } />
				<Route path='/projects' element={ <Projects /> } />
				<Route path='/projects/:id' element={ <ProjectDetails /> } />
				<Route path='/tickets' element={<Tickets />} />
				<Route path='/tickets/:id' element={<TicketDetails />} />
				<Route path='/users' element={ <Users /> } />
				<Route path='/users/:id' element={ <UserDetails /> } />
			</Routes>
		</div>
	)
}

export default ViewRoute;