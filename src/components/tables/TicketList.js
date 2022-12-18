import React from 'react'
import Table from '../UI/Table'

function TicketList(props) {
	const ticketHeadings = [
		'Id',
		'Ticket Title',
		'Project',
		'Author',
		'Priority',
		'Status',
	];
	
	const title = props.title || 'Tickets';

	return (
		<Table 
			title={title}
			type='ticket'
			tableData={props.tickets} 
			tableHeadings={ticketHeadings} 
		/>
	)
}

export default TicketList