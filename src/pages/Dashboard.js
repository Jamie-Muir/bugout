import React from 'react';

import Profile from '../components/Profile';
import List from '../components/tables/List';

function Dashboard() {
	return (
		<>
			<Profile />
			<List heading='Your Projects' type='projects' />
			<List heading='Recent Tickets' type='tickets' />
		</>
	)
}

export default Dashboard;