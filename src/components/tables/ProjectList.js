import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTable } from '../../store/actions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Table from '../UI/Table';

function ProjectList(props) {
	const dispatch = useDispatch();
	const projects = useSelector((state) => state?.projects?.list);
	const status = useSelector((state) => state?.projects?.status);

	const heading = props.heading || 'Projects';

	useEffect(() => {
		if(projects.length) return; 
		dispatch(fetchTable('projects'));

	}, [dispatch, projects]);

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

	const tableData = projects?.map(({id, title, description, issueCount, status}, idx) => {
		return {
			id,
			idx,
			title,
			description,
			issueCount,
			status			
		}
	});

	return (
		<Table
			heading={heading}
			type='project'
			tableData={tableData}
			tableHeadings={projectHeadings}
		/>
	)
}

export default ProjectList;