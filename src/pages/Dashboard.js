import React from 'react';

import Profile from '../components/Profile';
import ProjectList from '../components/tables/ProjectList';
import TicketList from '../components/tables/TicketList';

import FakeTickets from '../store/FakeTickets';
import FakeProjects from '../store/FakeProjects';

function Dashboard() {
	return (
		<>
			<Profile />
			<ProjectList title='Your Projects' data={FakeProjects} />
			<TicketList title='Recent Tickets' data={FakeTickets} />
		</>
	)
}

export default Dashboard;