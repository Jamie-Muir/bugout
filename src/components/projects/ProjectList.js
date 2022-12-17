import React from 'react'
import { Link } from 'react-router-dom';

import Card from '../UI/Card';
import classes from './ProjectList.module.scss';

const ProjectItem = (props) => {
	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.name}</td>
			<td>{props.issueCount}</td>
			<td>{props.contributors}</td>
			<td>{props.status}</td>
			<td>
				<Link to={`/projects/:${props.id}`}>
					<button>
						View Project
					</button>
				</Link>
			</td>
		</tr>
	)
}

function ProjectList(props) {

	const list = props?.projects.map(item => <ProjectItem key={item.id} {...item} />)

	return (
		<Card className={classes.container} title='Project List'>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Project Name</th>
						<th>Open Issues</th>
						<th>Contributors</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{list}
				</tbody>
			</table>
		</Card>
	)
}

export default ProjectList