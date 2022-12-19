import React from 'react'
import Table from '../UI/Table';

function ProjectList(props) {
	const projectHeadings = [
		'Id #',
		'Project Title',
		'Description',
		'Open Issues',
		'Status',
	];

	const title = props.title || 'Projects';

	// Tailor Data //
	const tableData = props.data.map(({id, title, description, issueCount, status}) => {
		return {
			id,
			title,
			description,
			issueCount,
			status			
		}
	});

	return (
		<Table
			title={title}
			type='project'
			tableData={tableData}
			tableHeadings={projectHeadings}
		/>
	)
}

export default ProjectList