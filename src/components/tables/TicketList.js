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
		'Author',
		'Priority',
		'Status',
	];

	const title = props.title || 'Tickets';

	let i = 0;
	const tableData = loadedProjects?.map(({ title, project, author, priority, status }) => {
		i++
		return {
			i,
			title,
			project,
			author,
			priority,
			status
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