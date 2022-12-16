import React from 'react'
import OpenTicketForm from './OpenTicketForm'

import classes from './OpenTicket.module.scss';

function OpenTicket() {
	return (
		<div className={classes.openTicketWrapper}>
			<OpenTicketForm />
		</div>
	)
}

export default OpenTicket