import React from 'react'
import NewTableItem from '../components/form/NewTableItem';
import NewTicketForm from '../components/form/forms/NewTicketForm';
import TicketList from '../components/UI/tables/TicketList';

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