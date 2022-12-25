// import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import useHttp from '../../hooks/use-http';
// import { getSingleEntry } from '../../lib/api';
import Details from './Details';

// import LoadingSpinner from '../UI/LoadingSpinner';
import { useSelector } from 'react-redux';
import List from '../tables/List';

function ProjectDetails(props) {
	const params = useParams();
	let project = useSelector(state => state.projects?.list?.find(item => item.id === params.id))

	// const { sendRequest, status, data } = useHttp(getSingleEntry, true);

	// useEffect(() => {
	// 	if (!project) {
	// 		sendRequest(params.id, 'projects')
	// 		project = data;
	// 	}
	// }, [sendRequest, params.id, project]);

	// if (status === 'pending') {
	// 	return (
	// 		<div className='centered'>
	// 			<LoadingSpinner />
	// 		</div>
	// 	)
	// }

	if (!project) {
		return <Details heading='Item Not found' id='null' />
	}

	return (
		<>
			<Details heading={project.title} id={project.id}>
				<p>Description: {project.description} </p>
				<p>Status: {project.status} </p>
				<p>Contributors: </p>
				<ul>
					{project.contributors?.map(c => <li key={c}>{c}</li>)}
				</ul>
			</Details>
			<List heading='Recent Tickets' type='tickets' />
			<List heading='Collaborators' type='users' />
		</>
	)
}

export default ProjectDetails;