import React from 'react'
import Input from '../Input'
import SelectInput from '../SelectInput'
import TextArea from '../TextArea'

function NewTicketForm(props) {
	const selectOptions = [
		'High',
		'Mid',
		'Low',
	];

	return (
		<form>
			<Input name='title' label='Ticket Title' />
			<TextArea name='description' label='Ticket description' />
			<Input name='assigned' label='Ticket assigned to' />

			<SelectInput name='priority' label='Ticket Priority' options={selectOptions}/>
		</form>
	)
}

export default NewTicketForm