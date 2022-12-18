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
	
	const tableData = props.data

	return (
		<Table 
			title={title}
			type='user'
			tableData={tableData} 
			tableHeadings={userHeadings} 
		/>
	)
}

export default UserList;