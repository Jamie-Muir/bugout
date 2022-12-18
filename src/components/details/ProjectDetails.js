import React from 'react';
import { useParams } from 'react-router-dom';

import TicketList from '../tables/TicketList';
import UserList from '../tables/UserList';

import Details from './Details';

import FakeProjects from '../../store/FakeProjects';
import FakeTickets from '../../store/FakeTickets';
import FakeUsers from '../../store/FakeUsers';

function ProjectDetails(props) {
	const params = useParams();
	const project = FakeProjects.find(project => project.id === +params.id);

	if (!project) {
		return <Details heading='Item Not found' id='null' />
	}

	return (
		<>
			<Details heading={project.title} id={project.id}>
				<p>Status: {project.status} </p>
				<p>Contributors: </p>
				<ul>
					{project.contributors.map(c => <li key={c}>{c}</li>)}
				</ul>
			</Details>
			<TicketList data={FakeTickets} />
			<UserList data={FakeUsers} />
		</>
	)
}

export default ProjectDetails;