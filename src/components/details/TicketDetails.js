import React from 'react';
import { useParams } from 'react-router-dom';
import FakeTickets from '../../store/FakeTickets';
import BackButton from '../UI/BackButton';
import Card from '../UI/Card';

function TicketDetails(props) {
	const params = useParams();
	const ticket = FakeTickets.find(ticket => ticket.id === +params.id);

	return (
		<>
			<BackButton />
			<Card title={ticket.title}>
				<p>Project: <code>{ticket.project}</code></p>
				<p>Author: <code>{ticket.author}</code></p>
				<p>Description: <code>{ticket.description}</code></p>

				<footer>
					ID: {ticket.id}
				</footer>
			</Card>
		</>
	)
}

export default TicketDetails;