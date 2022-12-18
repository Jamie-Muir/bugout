import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';

import '../../index.css';
import Projects from '../../pages/Projects';
import Tickets from '../../pages/Tickets';
import Users from '../../pages/Users';

function ViewRoute() {
	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/' element={ <Dashboard /> } />
				<Route path='/tickets' element={<Tickets />} exact />
				<Route path='/projects' element={ <Projects /> } />
				<Route path='/users' element={ <Users /> } />
			</Routes>
		</div>
	)
}

export default ViewRoute;