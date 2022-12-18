import React from 'react';
import Table from '../UI/Table';

function UserList(props) {
	const userHeadings = [
		'Id',
		'Username',
		'Email',
		'Role'
	];

	const title = props.title || 'Users';
	
	return (
		<Table 
			title={title}
			type='user'
			tableData={props.users} 
			tableHeadings={userHeadings} 
		/>
	)
}

export default UserList;