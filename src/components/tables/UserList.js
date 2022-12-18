import React from 'react';
import Table from '../Table';

function UserList(props) {
	const userHeadings = [
		'Id',
		'Username',
		'Email',
		'Role'
	];
	
	return (
		<Table 
			title='Users'
			type='user'
			tableData={props.users} 
			tableHeadings={userHeadings} 
		/>
	)
}

export default UserList;