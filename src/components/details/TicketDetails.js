import React from 'react';
import { useParams } from 'react-router-dom';

import Details from './Details';

import FakeTickets from '../../store/FakeTickets';

function TicketDetails(props) {
	const params = useParams();
	const ticket = FakeTickets.find(ticket => ticket.id === +params.id);

	if (!ticket) {
		return <Details heading='Item Not found' id='null' />
	}

	return (
		<>
			<Details heading={ticket.title} id={ticket.id} >
				<p>Project: <code>{ticket.project}</code></p>
				<p>Author: <code>{ticket.author}</code></p>
				<p>Description: <code>{ticket.description}</code></p>
			</Details>
		</>
	)
}

export default TicketDetails;