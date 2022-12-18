import React from 'react'
import NewProject from '../components/projects/NewProject';
import ProjectList from '../components/projects/ProjectList';

import { fakeProjects } from '../store/fakeData';

function Projects() {
	return (
		<>
			<NewProject />
			<ProjectList projects={fakeProjects} />
		</>
	)
}

export default Projects;