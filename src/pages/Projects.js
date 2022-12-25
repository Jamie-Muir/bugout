import React from 'react';

import NewTableItem from '../components/tables/NewTableItem';
import NewProjectForm from '../components/forms/NewProjectForm';
import List from '../components/tables/List';

function Projects() {
	return (
		<>
			<NewTableItem heading='Create a Project' form={<NewProjectForm />}/>
			<List type='projects' />
		</>
	)
}

export default Projects;