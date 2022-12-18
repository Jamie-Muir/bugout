import React, { useState } from 'react'
import Card from '../UI/Card'
import NewProjectForm from './NewProjectForm';

function NewProject() {
	const [showForm, setShowForm] = useState(true);

	const output = showForm ? <NewProjectForm /> : '';
	const buttonText = !showForm ? 'Open' : 'Close';

	const onHide = () => setShowForm(prev => !prev) 

	return (
		<Card title='New Project'>
			{output}
			<footer>
				<button onClick={onHide}>
					{buttonText}
				</button>
			</footer>
		</Card>
	)
}

export default NewProject