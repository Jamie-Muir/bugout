import React from 'react';

import Profile from '../components/Profile';
import ProjectList from '../components/projects/ProjectList';
import TicketList from '../components/tickets/TicketList';

import FakeTickets from '../store/FakeTickets';
import FakeProjects from '../store/FakeProjects';

function Dashboard() {
	return (
		<div>
			<Profile />
			<ProjectList projects={FakeProjects} />
			<TicketList tickets={FakeTickets} />
		</div>
	)
}

export default Dashboard;