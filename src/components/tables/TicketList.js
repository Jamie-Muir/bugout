import React from 'react'
import Table from '../Table'

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
			type='ticket'
			tableData={props.tickets} 
			tableHeadings={ticketHeadings} 
		/>
	)
}

export default TicketList