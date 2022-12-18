import React from 'react'
import Input from '../Input'
import SelectInput from '../SelectInput'

function NewProjectForm() {
	const selectOptions = [
		'Active',
		'Completed',
		'On-Hold',
		'Closed',
	];
	
	return (
		<form>
			<Input name='title' label='Project Name' />
			<Input name='description' label='Project Description' />
			<SelectInput name='status' label='Project Status' options={selectOptions}/>
		</form>
	)
}

export default NewProjectForm