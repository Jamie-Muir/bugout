import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTable } from '../../store/actions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Table from '../UI/Table'

function TicketList(props) {
	const dispatch = useDispatch();
	const tickets = useSelector((state) => state?.tickets?.list);
	const status = useSelector((state) => state?.tickets?.status);

	const heading = props.heading || 'Tickets';

	useEffect(() => {
		if(tickets.length) return; 
		dispatch(fetchTable('tickets'));

	}, [dispatch, tickets]);

	if(status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		)
	}

	const ticketHeadings = [
		'#',
		'Ticket Title',
		'Project',
		'Priority',
		'Status',
		'Category'
	];

	const tableData = tickets?.map(({ id, title, project, priority, status, category }, idx) => {
		return {
			id,
			idx,
			title,
			project,
			priority,
			status,
			category
		}
	})

	return (
		<Table
			heading={heading}
			type='ticket'
			tableData={tableData}
			tableHeadings={ticketHeadings}
		/>
	)
}

export default TicketList