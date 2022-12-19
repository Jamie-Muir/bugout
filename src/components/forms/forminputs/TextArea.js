import React from 'react';
import classes from './FormStyles.module.scss';

const TextArea = React.forwardRef((props, ref) => {
	return (
		<div className={`${props.className} ${classes.inputContainer}`}>
			<label htmlFor={props.name}>{props.label}</label>
			<textarea
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

export default TextArea;