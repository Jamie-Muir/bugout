import React from 'react';

import NewTableItem from '../components/UI/NewTableItem';
import NewProjectForm from '../components/forms/NewProjectForm';
import ProjectList from '../components/tables/ProjectList';

import FakeProjects from '../store/FakeProjects';

function Projects() {
	return (
		<>
			<NewTableItem title='Create a Project' form={<NewProjectForm />}/>
			<ProjectList data={FakeProjects} />
		</>
	)
}

export default Projects;