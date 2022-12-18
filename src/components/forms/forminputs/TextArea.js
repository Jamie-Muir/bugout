import React from 'react';
import classes from './FormStyles.module.scss';

function TextArea(props) {
	return (
		<div className={`${props.className} ${classes.inputContainer}`}>
			<label htmlFor={props.name}>{props.label}</label>
			<textarea
				id={props.name}
				name={props.name}
				type={props.type}
				required={props.required}
				{...props}
			/>
		</div>
	)
}

export default TextArea