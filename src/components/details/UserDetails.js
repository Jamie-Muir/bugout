import React from 'react';
import { useParams } from 'react-router-dom';
import FakeTickets from '../../store/FakeTickets';
import FakeUsers from '../../store/FakeUsers';
import TicketList from '../tables/TicketList';
import BackButton from '../UI/BackButton';
import Card from '../UI/Card';

function UserDetails(props) {
	const params = useParams();
	const user = FakeUsers.find(user => user.id === +params.id);

	return (
		<>
			<BackButton />
			<Card title={`${user.username}`}>
				<p>Contact: {user.email}</p>
				<p>Roles: {user.role}</p>


				<footer>
					ID: {user.id}
				</footer>
			</Card>
			<TicketList title='Open Tickets' tickets={FakeTickets} />

		</>
	)
}

export default UserDetails;