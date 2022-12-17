import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

import classes from './Table.modules.scss';

const TableHeader = (props) => {
	const headings = props.headings.map(item => <th key={item}> {item} </th>)

	return (
		<thead className={classes.tableHead}>
			<tr>
				{headings}
				<th></th>
			</tr>
		</thead>
	)
}

const TableButtons = (props) => {
	return (
		<>
			<td>
				<Link to={`/projects/:${props.id}`}>
					<button>
						View Project
					</button>
				</Link>
				<button className={classes.destructive}>
					Delete
				</button>
			</td>
		</>
	)
}

const TableItem = (props) => {
	const values = Object.values(props.item);
	const entries = values.map(value => <td key={Math.random()+value}> {value} </td>)

	return (
		<tr>
			{entries}
			<TableButtons />
		</tr>
	)
}

// Requires props [tableData, tableHeadings]
function Table(props) {
	const list = props.tableData?.map(item => <TableItem key={item.id} item={item} />)

	return (
		<Card className={classes.container} title='Project List'>
			<table>
				<TableHeader headings={props.tableHeadings} />
				<tbody>
					{list}
				</tbody>
			</table>
		</Card>
	)
}

export default Table