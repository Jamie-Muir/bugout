import React from 'react';
import { useParams } from 'react-router-dom';
import TicketList from '../tables/TicketList';
import Details from './Details';

import FakeTickets from '../../store/FakeTickets';
import FakeUsers from '../../store/FakeUsers';

function UserDetails(props) {
	const params = useParams();
	const user = FakeUsers.find(user => user.id === +params.id);

	return (
		<>
			<Details heading={user.username} id={user.id}>
				<p>Contact: {user.email}</p>
				<p>Roles: {user.role}</p>
			</Details>
			<TicketList title='Open Tickets' data={FakeTickets} />
		</>
	)
}

export default UserDetails;