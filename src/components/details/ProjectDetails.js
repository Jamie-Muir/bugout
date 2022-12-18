import React from 'react';
import { useParams } from 'react-router-dom';

import TicketList from '../tables/TicketList';
import UserList from '../tables/UserList';
import BackButton from '../UI/BackButton';
import Card from '../UI/Card';

import FakeProjects from '../../store/FakeProjects';
import FakeTickets from '../../store/FakeTickets';
import FakeUsers from '../../store/FakeUsers';

function ProjectDetails(props) {
	const params = useParams();
	const project = FakeProjects.find(project => project.id === +params.id);

	return (
		<>
			<BackButton />
			<Card title={`${project?.name}`}>
				<p>Status: {project.status} </p>
				<p>Contributors: </p>
				<ul>
					{project.contributors.map(c => <li key={c}>{c}</li>)} 
				</ul>
				<footer>
					ID: {project.id}
				</footer>
			</Card>
			<TicketList tickets={FakeTickets} />
			<UserList users={FakeUsers} />
		</>
	)
}

export default ProjectDetails;