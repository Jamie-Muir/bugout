import React from 'react'
import Table from '../UI/Table';

function ProjectList(props) {
	const projectHeadings = [
		'Id #',
		'Project Title',
		'Open Issues',
		'Contributors',
		'Status',
	];

	const title = props.title || 'Projects';

	// Tailor Data //
	const tableData = props.data.map(({id, title, issueCount, contributors, status}) => {
		return {
			id,
			title,
			issueCount,
			contributors,
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