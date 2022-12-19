import React from 'react';
import classes from './FormStyles.module.scss';

const Input = React.forwardRef((props, ref) => {
	return (
		<div className={`${props.className} ${classes.inputContainer}`}>
			<label htmlFor={props.name}>{props.label}</label>
			<input
				ref={ref}
				id={props.name}
				name={props.name}
				type={props.type}
				required={props.required}
				{...props}
			/>
		</div>
	)
})

export default Input;