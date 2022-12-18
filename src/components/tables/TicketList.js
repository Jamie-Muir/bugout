import React from 'react'
import Table from '../UI/Table'

function TicketList(props) {
	const ticketHeadings = [
		'Id #',
		'Ticket Title',
		'Project',
		'Author',
		'Priority',
		'Status',
	];

	const title = props.title || 'Tickets';

	const tableData = props.data.map(({ id, title, project, author, priority, status }) => {
		return {
			id,
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