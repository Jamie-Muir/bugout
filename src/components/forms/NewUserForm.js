import React from 'react'
import Input from '../Input'
import SelectInput from '../SelectInput'

function NewUserForm() {
	const selectOptions = [
		'Admin',
		'Developer',
		'Tester',
		'Recruiter',
	];
	
	return (
		<form>
			<Input name='username' type='text' label='Username' />
			<Input name='email' type='email' label='User Email' />
			<SelectInput name='roles' label='User Roles' options={selectOptions}  />
		</form>
	)
}

export default NewUserForm