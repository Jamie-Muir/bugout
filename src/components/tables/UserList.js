import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTable } from '../../store/actions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Table from '../UI/Table';

function UserList(props) {
	const dispatch = useDispatch();
	const users = useSelector(state => state.users.list);
	const status = useSelector(state => state?.users?.status);

	const heading = props.heading || 'Users';

	useEffect(() => {
		if(users.length > 1) return;
		dispatch(fetchTable('users'));

	}, [dispatch]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		)
	}

	const userHeadings = [
		'#',
		'Username',
		'Email',
		'Role'
	];

	const tableData = users.map(({ id, username, email, role }, idx) => {
		return {
			id,
			idx,
			username,
			email,
			role
		}
	})

	return (
		<Table
			heading={heading}
			type='user'
			tableData={tableData}
			tableHeadings={userHeadings}
		/>
	)
}

export default UserList;