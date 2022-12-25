import React from 'react';

import NewTableItem from '../components/tables/NewTableItem';
import NewUserForm from '../components/forms/NewUserForm';
import List from '../components/tables/List';

function Users() {
	return (
		<>
			<NewTableItem heading='Register a User' form={<NewUserForm />} />
			<List type='users' />
		</>
	)
}

export default Users;