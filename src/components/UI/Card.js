import React from 'react'

import classes from './Card.module.scss';

function Card(props) {
	return (
		<div className={`${classes.card} ${props.className}`}>
			<h2>{props.title}</h2>
			{props.children}
		</div>
	)
}

export default Card