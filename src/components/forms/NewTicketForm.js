import React, { useRef } from 'react'
import useHttp from '../../hooks/use-http';
import { addEntry } from '../../lib/api';

import Input from './forminputs/Input'
import SelectInput from './forminputs/SelectInput'
import TextArea from './forminputs/TextArea'

function NewTicketForm(props) {
	const { sendRequest } = useHttp(addEntry);

	const titleRef = useRef(null);
	const projectRef = useRef(null);
	const descRef = useRef(null);
	const assignedRef = useRef(null);
	const priorityRef = useRef(null);


	const priorityOptions = [
		'High',
		'Mid',
		'Low',
	];

	const projectOptions = [
		'this one',
		'that one'
	]

	const handleSubmit = (e) => {
		e.preventDefault();

		const ticketData = {
			title: titleRef.current.value,
			project: projectRef.current.value,
			description: descRef.current.value,
			assigned: assignedRef.current.value,
			priority: priorityRef.current.value,
		}

		sendRequest(ticketData, 'tickets');
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input name='title' label='Ticket Title' ref={titleRef} />
			<SelectInput name='project' label='Project' options={projectOptions} ref={projectRef} />
			<TextArea name='description' label='Ticket description' ref={descRef} />
			<Input name='assigned' label='Ticket assigned to' ref={assignedRef} />
			<SelectInput name='priority' label='Ticket Priority' options={priorityOptions} ref={priorityRef} />
			<button type='submit'>Send</button>
		</form>
	)
}

export default NewTicketForm