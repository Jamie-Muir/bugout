import React, { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllEntries } from '../../lib/api';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import Table from '../UI/Table';

function UserList(props) {
	const {sendRequest, status, data: loadedUsers } = useHttp(getAllEntries, true)

	useEffect(() => {
		sendRequest('users');
	},[sendRequest]);

	if(status === 'pending') {
		return (
			<Card className='centered'>
				<LoadingSpinner />
			</Card>
		)
	}

	const userHeadings = [
		'#',
		'Username',
		'Email',
		'Role'
	];

	const title = props.title || 'Users';
	
	let i = 0;
	const tableData = loadedUsers.map(({ id, username, email, role }) => {
		i++ 
		return {
			id, 
			i,
			username,
			email,
			role
		}
	})

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