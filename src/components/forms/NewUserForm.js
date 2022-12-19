import React, { useRef } from 'react'
import useHttp from '../../hooks/use-http';
import { addEntry } from '../../lib/api';
import Input from './forminputs/Input'
import SelectInput from './forminputs/SelectInput'

function NewUserForm() {
	const { sendRequest } = useHttp(addEntry);

	const usernameRef = useRef(null);
	const emailRef = useRef(null);
	const roleRef = useRef(null);

	const selectOptions = [
		'Admin',
		'Developer',
		'Tester',
		'Recruiter',
	];

	const handleSubmit = (e) => {
		e.preventDefault();

		const userData = {
			username: usernameRef.current.value,
			email: emailRef.current.value,
			role: roleRef.current.value,
		}

		sendRequest(userData, 'users');
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<Input name='username' type='text' label='Username' ref={usernameRef} />
			<Input name='email' type='email' label='User Email' ref={emailRef} />
			<SelectInput name='roles' label='User Roles' options={selectOptions} ref={roleRef} />
			<button type='submit'>Send</button>
		</form>
	)
}

export default NewUserForm