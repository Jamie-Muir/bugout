import React from 'react';

import NewTableItem from '../components/UI/NewTableItem';
import NewUserForm from '../components/forms/NewUserForm';
import UserList from '../components/tables/UserList';

import FakeUsers from '../store/FakeUsers';

function Users() {
	return (
		<>
			<NewTableItem title='Register a User' form={<NewUserForm />} />
			<UserList data={FakeUsers} />
		</>
	)
}

export default Users;