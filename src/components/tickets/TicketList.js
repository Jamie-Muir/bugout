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
	
	return (
		<Table 
			title='Recent Tickets'
			tableData={props.tickets} 
			tableHeadings={ticketHeadings} 
		/>
	)
}

export default TicketList