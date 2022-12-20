import React from 'react';

import NewTableItem from '../components/UI/NewTableItem';
import NewTicketForm from '../components/forms/NewTicketForm';
import TicketList from '../components/tables/TicketList';

function Projects() {
	return (
		<>
			<NewTableItem title='Add a Ticket' form={<NewTicketForm />} />
			<TicketList />
		</>
	)
}

export default Projects;