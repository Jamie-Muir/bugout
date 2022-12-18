import React from 'react'
import NewTableItem from '../components/form/NewTableItem';
import NewProjectForm from '../components/projects/NewProjectForm';
import ProjectList from '../components/projects/ProjectList';

import { fakeProjects } from '../store/fakeData';

function Projects() {
	const form = <NewProjectForm />

	return (
		<>
			<NewTableItem title='New Project' form={form}/>
			<ProjectList projects={fakeProjects} />
		</>
	)
}

export default Projects;