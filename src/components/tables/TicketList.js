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

	const heading = props.heading || 'Tickets';

	const tableData = loadedProjects?.map(({ id, title, project, priority, status, category }, idx) => {
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