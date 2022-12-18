import React from 'react'
import Input from '../form/Input'
import SelectInput from '../form/SelectInput'

function NewTicketForm(props) {
	const selectOptions = [
		'High',
		'Mid',
		'Low',
	];

	return (
		<form>
			<Input name='title' label='Ticket Title' />
			<Input name='description' label='Ticket description' />
			<Input name='assigned' label='Ticket assigned to' />

			<SelectInput name='priority' label='Ticket Priority' options={selectOptions}/>
		</form>
	)
}

export default NewTicketForm