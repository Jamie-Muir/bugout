import React from 'react';
import Table from '../UI/Table';

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
			tableData={props.users} 
			tableHeadings={userHeadings} 
		/>
	)
}

export default UserList;