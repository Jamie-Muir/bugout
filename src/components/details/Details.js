import React from 'react'
import BackButton from '../UI/BackButton'
import Card from '../UI/Card'

function Details(props) {
	return (
		<>
			<BackButton />
			<Card 
				heading={`${props?.heading}`}
				footer={`ID: ${props.id}`}
			>
				{props.children}
			</Card>

		</>
	)
}

export default Details