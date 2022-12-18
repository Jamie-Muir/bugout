import React from 'react'
import NewTableItem from '../components/form/NewTableItem';
import NewProjectForm from '../components/projects/NewProjectForm';
import ProjectList from '../components/projects/ProjectList';

import FakeProjects from '../store/FakeProjects';

function Projects() {
	const form = <NewProjectForm />

	return (
		<>
			<NewTableItem title='New Project' form={form}/>
			<ProjectList projects={FakeProjects} />
		</>
	)
}

export default Projects;