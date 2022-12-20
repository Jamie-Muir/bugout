import React from 'react';

import Profile from '../components/Profile';
import ProjectList from '../components/tables/ProjectList';
import TicketList from '../components/tables/TicketList';

function Dashboard() {
	return (
		<>
			<Profile />
			<ProjectList title='Your Projects' />
			<TicketList title='Recent Tickets' />
		</>
	)
}

export default Dashboard;