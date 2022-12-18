import React from 'react'
import Input from '../form/Input'
import SelectInput from '../form/SelectInput'

function NewProjectForm() {
	const statusOptions = [
		'Active',
		'Completed',
		'On-Hold',
		'Closed',
		
	];
	
	return (
		<form>
			<Input name='title' type='text' label='Project Name' />
			<Input name='description' type='text' label='Project Description' />
			<SelectInput name='status' label='Project Status' options={statusOptions}/>
		</form>
	)
}

export default NewProjectForm