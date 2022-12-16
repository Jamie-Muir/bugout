import React from 'react'
import Input from '../UI/Input'

function OpenTicketForm(props) {
	return (
		<form>
			<Input name='title' label='Ticket Title' placeholder='Ticket Title' />
			<Input name='description' label='Ticket description' placeholder='Ticket description' type='textarea'/>
			<Input name='assigned' label='Ticket assigned to: ' />
			<select id='priority' name='priority'>
				<option value='High'>High</option>
				<option value='Medium'>Medium</option>
				<option value='Low'>Low</option>
			</select>
		</form>
	)
}

export default OpenTicketForm