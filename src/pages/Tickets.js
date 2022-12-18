import React from 'react'
import NewTableItem from '../components/form/NewTableItem';
import NewTicketForm from '../components/tickets/NewTicketForm';
import TicketList from '../components/tickets/TicketList';

import FakeTickets from '../store/FakeTickets';

function Projects() {
	const form = <NewTicketForm />

	return (
		<>
			<NewTableItem title='New Ticket' form={form} />
			<TicketList tickets={FakeTickets} />
		</>
	)
}

export default Projects;