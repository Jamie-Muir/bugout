import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Details from './Details';

import useHttp from '../../hooks/use-http';
import { getSingleEntry } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

function TicketDetails(props) {
	const params = useParams();

	const { sendRequest, status, data: ticket } = useHttp(getSingleEntry, true);

	useEffect(() => {
		sendRequest(params.id, 'tickets')
	},[sendRequest, params.id]);
	
	if(status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		)
	}

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