import React, { useState } from 'react'
import Card from '../UI/Card'
import NewTicketForm from './NewTicketForm';

function NewTicket() {
	const [showForm, setShowForm] = useState(true);

	const output = showForm ? <NewTicketForm /> : '';
	const buttonText = !showForm ? 'Open' : 'Close';

	const onHide = () => setShowForm(prev => !prev) 

	return (
		<Card title='New Ticket'>
			{output}
			<footer>
				<button onClick={onHide}>
					{buttonText}
				</button>
			</footer>
		</Card>
	)
}

export default NewTicket