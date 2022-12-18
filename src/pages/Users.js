import React from 'react'

import NewTableItem from '../components/form/NewTableItem';
import NewUserForm from '../components/users/NewUserForm';
import UserList from '../components/users/UserList';

import FakeUsers from '../store/FakeUsers';

function Users() {
	return (
		<>
			<NewTableItem title='Register a User' form={<NewUserForm />} />
			<UserList users={FakeUsers} />
		</>
	)
}

export default Users;