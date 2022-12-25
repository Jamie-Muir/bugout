import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

import useHttp from '../../hooks/use-http';
import { getSingleEntry } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import List from '../tables/List';

function UserDetails(props) {
	const params = useParams();
	const { sendRequest, status, data: user } = useHttp(getSingleEntry, true);

	useEffect(() => {
		sendRequest(params.id, 'users')
	},[sendRequest, params.id]);
	
	if(status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		)
	}

	if (!user) {
		return <Details heading='Item Not found' id='null' />
	}

	return (
		<>
			<Details heading={user.username} id={user.id}>
				<p>Contact: {user.email}</p>
				<p>Roles: {user.role}</p>
			</Details>
			<List heading='Recent Tickets' type='tickets' />
		</>
	)
}

export default UserDetails;