import React from 'react'

import NewTableItem from '../components/form/NewTableItem';
import NewTicketForm from '../components/tickets/NewTicketForm';
import UserList from '../components/users/UserList';

import FakeUsers from '../store/FakeUsers';

function Users() {
	const form = <NewTicketForm />

	return (
		<>
			<NewTableItem title='New Ticket' form={form} />
			<UserList users={FakeUsers} />
		</>
	)
}

export default Users;