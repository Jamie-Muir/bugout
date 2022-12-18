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
			<ProjectList title='Your Projects' projects={FakeProjects} />
			<TicketList title='Recent Tickets' tickets={FakeTickets} />
		</>
	)
}

export default Dashboard;