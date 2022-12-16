import React from 'react'

function Input(props) {
	return (
		<div className={props.className}>
			<label htmlFor={props.name}>{props.label}</label>
			<input
				id={props.name}
				name={props.name}
				type={props.type}
				required={props.required}
				{...props}
			/>
		</div>
	)
}

export default Input