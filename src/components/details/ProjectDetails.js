import React from 'react';
import { useParams } from 'react-router-dom';
import FakeTickets from '../../store/FakeTickets';
import TicketList from '../tables/TicketList';
import BackButton from '../UI/BackButton';
import Card from '../UI/Card';

function ProjectDetails(props) {
	const params = useParams();

	return (
		<>
			<BackButton />
			<Card title='Project Details'>
				<p>Id: {params.id}</p>
				<footer />
			</Card>
			<TicketList tickets={FakeTickets} />
		</>
	)
}

export default ProjectDetails;