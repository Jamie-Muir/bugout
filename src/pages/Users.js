import React from 'react';

import NewTableItem from '../components/UI/NewTableItem';
import NewUserForm from '../components/forms/NewUserForm';
import UserList from '../components/tables/UserList';

function Users() {
	return (
		<>
			<NewTableItem heading='Register a User' form={<NewUserForm />} />
			<UserList />
		</>
	)
}

export default Users;