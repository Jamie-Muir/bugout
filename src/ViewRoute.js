import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OpenTicket from './components/OpenTicket';

import './index.css';

function ViewRoute() {
	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/tickets' element={<OpenTicket />} exact />
				<Route path='/projects' element={ <OpenTicket /> } />
				{/* <Route path='/' element={ <OpenTicket /> } /> */}
			</Routes>
		</div>
	)
}

export default ViewRoute;