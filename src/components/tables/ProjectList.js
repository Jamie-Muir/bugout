import React from 'react'
import Table from '../UI/Table';

function ProjectList(props) {
	const projectHeadings = [
		'Id',
		'Project Name',
		'Open Issues',
		'Contributors',
		'Status',
	];

	const title = props.title || 'Projects';

	// Tailor Data //

	return (
		<Table 
			title={title}
			type='project'
			tableData={props.projects} 
			tableHeadings={projectHeadings} 
		/>
	)
}

export default ProjectList