import React from 'react';
import classes from './Dashboard.module.scss';

import Profile from '../components/Profile';
import ProjectList from '../components/projects/ProjectList';
import TicketList from '../components/tickets/TicketList';

const fakeProjects = [
	{
		id: 0,
		name: 'Test Project',
		issueCount: 0,
		contributors: [
			'Kyle', 
			'Kylie',
		],
		status: 'active'
	},
	{
		id: 1,
		name: 'Test Project 2',
		ticketCount: 5,
		contributors: [
			'john', 
			'James',
		],
		status: 'active'
	}
];

const fakeTickets = [
	{
		id: 0,
		title: 'ITS ALL ON FIRE',
		// description: 'fire',
		project: 'Test Project 1',
		author: 'Combustables',
		// comments: [
		// 	{
		// 		userId: 1, 
		// 		comment: 'its true',
		// 	},
		// 	{
		// 		userId: 0, 
		// 		comment: 'omg so much fire',
		// 	}
		// ],
		priority: 3,
		status: 'open',
		// history: [
		// 	{
		// 		creator: '',
		// 		updateStatus: 'created',
		// 		created: null,
		// 	},
		// 	{
		// 		creator: '',
		// 		updateStatus: 'closed',
		// 		created: null,
		// 	},
		// ]
	},
	{
		id: 1,
		title: 'err all under control',
		project: 'Moon Prison',
		author: 'Definitely a stormtrooper',
		priority: 0,
		status: 'closed'
	}
]

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