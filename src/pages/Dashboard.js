import React from 'react';
import classes from './Dashboard.module.scss';

import Profile from '../components/Profile';
import ProjectList from '../components/projects/ProjectList';

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
		issueCount: 5,
		contributors: [
			'john', 
			'James',
		],
		status: 'active'
	}
];

const fakeIssues = [
	{
		id: 0,
		title: 'ITS ALL ON FIRE',
		description: 'fire',
		author: 'Combustables',
		comments: [],

	},
]

function Dashboard() {
	return (
		<div>
			<Profile />
			<ProjectList projects={fakeProjects} />
			{/* <RecentIssues recentIssues={fakeIssues} /> */}
		</div>
	)
}

export default Dashboard;