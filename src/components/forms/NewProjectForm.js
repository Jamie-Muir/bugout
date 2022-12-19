import React, { useRef } from 'react'
import useHttp from '../../hooks/use-http';
import { addEntry } from '../../lib/api';

import Input from './forminputs/Input'
import SelectInput from './forminputs/SelectInput'


function NewProjectForm() {
	const { sendRequest } = useHttp(addEntry);

	const titleRef = useRef(null);
	const descRef = useRef(null);
	const statusRef = useRef(null);

	const selectOptions = [
		'Active',
		'Completed',
		'On-Hold',
		'Closed',
	];

	const onSubmit = (e) => {
		e.preventDefault();

		const projectData = {
			title: titleRef.current.value,
			description: descRef.current.value,
			status: statusRef.current.value,
		}
		sendRequest(projectData, 'projects');
	}
	
	return (
		<form onSubmit={onSubmit}>
			<Input name='title' label='Project Name' ref={titleRef} />
			<Input name='description' label='Project Description' ref={descRef} />
			<SelectInput name='status' label='Project Status' options={selectOptions} ref={statusRef} />
			<button type='submit'>Send</button>
		</form>
	)
}

export default NewProjectForm