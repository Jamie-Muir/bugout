import React, { useEffect } from 'react'
import useHttp from '../../hooks/use-http';
import { getAllEntries } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import Table from '../UI/Table'

function TicketList(props) {
	const {sendRequest, status, data: loadedProjects } = useHttp(getAllEntries, true)

	useEffect(() => {
		sendRequest('tickets');
	},[sendRequest]);

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

	const title = props.title || 'Tickets';

	let i = 0;
	const tableData = loadedProjects?.map(({ title, project, priority, status, category }) => {
		i++
		return {
			i,
			title,
			project,
			priority,
			status,
			category
		}
	})

	return (
		<Table
			title={title}
			type='ticket'
			tableData={tableData}
			tableHeadings={ticketHeadings}
		/>
	)
}

export default TicketList