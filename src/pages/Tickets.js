import React from 'react'
import NewTableItem from '../components/UI/NewTableItem';
import NewTicketForm from '../components/forms/NewTicketForm';
import TicketList from '../components/tables/TicketList';

import FakeTickets from '../store/FakeTickets';

function Projects() {
	return (
		<>
			<NewTableItem title='Add a Ticket' form={<NewTicketForm />} />
			<TicketList tickets={FakeTickets} />
		</>
	)
}

export default Projects;