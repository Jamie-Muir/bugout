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
	// const assignedRef = useRef(null);
	const priorityRef = useRef(null);
	const categoryRef = useRef(null);

	const options = {
		project: [
			'Bugout',
			'this one',
			'that one'
		],
		priority: [
			'High',
			'Mid',
			'Low',
		],
		category: [
			'Bug',
			'Feature Request',
			'Documentation',
		]
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const ticketData = {
			title: titleRef.current.value,
			project: projectRef.current.value,
			description: descRef.current.value,
			author: 'Admin',
			// assigned: assignedRef.current.value,
			status: 'Open',
			priority: priorityRef.current.value,
			category: categoryRef.current.value,
		}

		sendRequest(ticketData, 'tickets');
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input name='title' label='Ticket Title' ref={titleRef} />
			<SelectInput name='project' label='Project' options={options.project} ref={projectRef} />
			<TextArea name='description' label='Ticket description' ref={descRef} />
			{/* <Input name='assigned' label='Ticket assigned to' ref={assignedRef} /> */}
			<SelectInput name='priority' label='Ticket Priority' options={options.priority} ref={priorityRef} />
			<SelectInput name='category' label='Ticket category' options={options.category} ref={categoryRef} />
			<button type='submit'>Send</button>
		</form>
	)
}

export default NewTicketForm