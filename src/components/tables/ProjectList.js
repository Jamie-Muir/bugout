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

	// Tailor Data //

	return (
		<Table 
			title='Your Projects'
			type='project'
			tableData={props.projects} 
			tableHeadings={projectHeadings} 
		/>
	)
}

export default ProjectList