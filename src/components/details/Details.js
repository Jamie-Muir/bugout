import React from 'react'
import BackButton from '../UI/BackButton'
import Card from '../UI/Card'

function Details(props) {
	return (
		<>
			<BackButton />
			<Card heading={`${props?.heading}`}>
				{props?.children}
				<footer>
					ID: {props?.id}
				</footer>
			</Card>

		</>
	)
}

export default Details