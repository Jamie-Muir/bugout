import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import OpenTicket from '../tickets/OpenTicket';

import '../../index.css';
import Projects from '../../pages/Projects';

function ViewRoute() {
	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/' element={ <Dashboard /> } />
				<Route path='/tickets' element={<OpenTicket />} exact />
				<Route path='/projects' element={ <Projects /> } />
			</Routes>
		</div>
	)
}

export default ViewRoute;