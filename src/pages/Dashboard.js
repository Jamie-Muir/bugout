import React from 'react';
import classes from './Dashboard.module.scss';

import Profile from '../components/Profile';
import ProjectList from '../components/projects/ProjectList';
import TicketList from '../components/tickets/TicketList';

import {fakeTickets, fakeProjects} from '../store/fakeData';


function Dashboard() {
	return (
		<div>
			<Profile />
			<ProjectList projects={fakeProjects} />
			<TicketList tickets={fakeTickets} />
		</div>
	)
}

export default Dashboard;