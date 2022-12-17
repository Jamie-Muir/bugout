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

	return (
		<Table 
			title='Your Projects'
			tableData={props.projects} 
			tableHeadings={projectHeadings} 
		/>
	)
}

export default ProjectList