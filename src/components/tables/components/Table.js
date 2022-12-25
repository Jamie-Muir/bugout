import React from 'react';
import Card from '../../UI/Card';
import { TableHeader, TableBody } from './TableComponents';

import classes from './Table.module.scss';

function Table(props) {
	return (
		<Card 
			className={classes.container} 
			heading={props.heading}
		>
			<div className={classes.tableContainer}>
				<table>
					<TableHeader headings={props.tableHeadings} />
					<TableBody 
						type={props.type}
						tableValues={props.tableValues}
					/>
				</table>
			</div>
		</Card>
	)
}

export default Table