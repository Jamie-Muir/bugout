import React from 'react'
// import { Link } from 'react-router-dom';

// import Card from '../UI/Card';
import Table from '../UI/Table';
// import classes from './ProjectList.module.scss';

function ProjectList(props) {
	const projectHeadings = [
		'Id',
		'Project Name',
		'Open Issues',
		'Contributors',
		'Status',
	]

	return (
		<Table tableData={props.projects} tableHeadings={projectHeadings} />
	)
}

export default ProjectList