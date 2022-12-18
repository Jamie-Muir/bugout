import React from 'react'
import NewTableItem from '../components/form/NewTableItem';
import NewTicketForm from '../components/tickets/NewTicketForm';
import TicketList from '../components/tickets/TicketList';

import { fakeTickets } from '../store/fakeData';

function Projects() {
	const form = <NewTicketForm />

	return (
		<>
			<NewTableItem title='New Ticket' form={form} />
			<TicketList projects={fakeTickets} />
		</>
	)
}

export default Projects;