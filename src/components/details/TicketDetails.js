import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../UI/BackButton';
import Card from '../UI/Card';

function TicketDetails(props) {
	const params = useParams();

	return (
		<>
			<BackButton />
			<Card title='Ticket Details'>
				<p>Id: {params.id}</p>
				<footer />
			</Card>
		</>
	)
}

export default TicketDetails;