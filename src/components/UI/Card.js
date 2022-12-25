import React from 'react'

import classes from './Card.module.scss';

function Card(props) {
	return (
		<div className={`${classes.card} ${props.className}`}>
			<h2>{props.heading}</h2>
			{props.children}
			<footer>
				{props.footer}
			</footer>
		</div>
	)
}

export default Card