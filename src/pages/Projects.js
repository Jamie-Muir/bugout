import React from 'react'
import NewTableItem from '../components/form/NewTableItem';
import NewProjectForm from '../components/form/forms/NewProjectForm';
import ProjectList from '../components/UI/tables/ProjectList';

import FakeProjects from '../store/FakeProjects';

function Projects() {
	return (
		<>
			<NewTableItem title='Create a Project' form={<NewProjectForm />}/>
			<ProjectList projects={FakeProjects} />
		</>
	)
}

export default Projects;