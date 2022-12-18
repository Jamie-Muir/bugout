import React from 'react';
import classes from './FormStyles.module.scss';

function SelectInput(props) {
	const options = props.options.map(item => <option key={item} value={item}>{item}</option>)

	return (
		<div className={`${props.className} ${classes.inputContainer}`} >
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