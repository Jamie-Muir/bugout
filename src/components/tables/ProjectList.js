import React, { useEffect } from 'react'
import useHttp from '../../hooks/use-http';
import { getAllEntries } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import Table from '../UI/Table';

function ProjectList(props) {
	const {sendRequest, status, data: loadedProjects } = useHttp(getAllEntries, true)

	useEffect(() => {
		sendRequest('projects');
	},[sendRequest]);

	if(status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		)
	}

	const projectHeadings = [
		'#',
		'Project Title',
		'Description',
		'Open Issues',
		'Status',
	];

	const title = props.title || 'Projects';

	// Tailor Data //
	let i = 0;
	const tableData = loadedProjects?.map(({id, title, description, issueCount, status}) => {
		i++
		return {
			id,
			i,
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