import React from 'react';
import classes from './Dashboard.module.scss';

import Profile from '../components/Profile';
import ProjectList from '../components/projects/ProjectList';

const fakeProjects = [
	{
		id: 0,
		name: 'Test Project',
		issueCount: 0,
		contributors: 1,
		status: 'active'
	},
	{
		id: 1,
		name: 'Test Project 2',
		issueCount: 5,
		contributors: 2,
		status: 'active'
	}
]

function Dashboard() {
	return (
		<div>
			<Profile />
			<ProjectList projects={fakeProjects} />
		</div>
	)
}

export default Dashboard;