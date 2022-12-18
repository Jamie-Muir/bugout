import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import classes from './BackButton.module.scss';

function BackButton() {
	const nav = useNavigate();

	return (
		<button
			className={classes.button}
			onClick={() => nav(-1)}
		>
			<FaArrowLeft size={30} className={ classes.icon } />
		</button>
	)
}

export default BackButton