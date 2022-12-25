import React from 'react';

import NewTableItem from '../components/tables/NewTableItem';
import NewTicketForm from '../components/forms/NewTicketForm';
import List from '../components/tables/List';

function Projects() {
	return (
		<>
			<NewTableItem heading='Add a Ticket' form={<NewTicketForm />} />
			<List type='tickets' />
		</>
	)
}

export default Projects;