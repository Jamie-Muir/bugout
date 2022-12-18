import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../UI/BackButton';
import Card from '../UI/Card';

function UserDetails(props) {
	const params = useParams();
	return (
		<>
			<BackButton />
			<Card title='User Details'>
				<p>Id: {params.id}</p>
				<footer />
			</Card>
		</>
	)
}

export default UserDetails;