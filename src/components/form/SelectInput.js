import React from 'react'

function SelectInput(props) {
	const options = props.options.map(item => <option value={item}>{item}</option>)

	return (
		<div className={props.className}>
			<label htmlFor={props.name}>{props.label}</label>
			<select
				id={props.name}
				name={props.name}
				type={props.type}
				required={props.required}
				{...props}
			>
				{options}
			</select>
		</div>
	)
}

export default SelectInput