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
				<th style={{ width: '15%' }}></th>
				<th style={{ width: '15%' }}></th>
			</tr>
		</thead>
	)
}

const TableButtons = (props) => {
	return (
		<>
			<td>
				<Link to={`/${props.type === 'tickets' ? 'tickets':'projects'}/:${props.id}`}>
					<button>
						View
					</button>
				</Link>
				<button>
					Delete
				</button>
			</td>
		</>
	)
}

const TableItem = (props) => {
	const values = Object.values(props.item);
	const entries = values.map(value => <td key={Math.random()+value}> {value} </td>);

	return (
		<tr>
			{entries}
			<TableButtons 
				id={props.item.id} 
				type={props.item.type}
			/>
		</tr>
	)
}

// Requires props [tableData, tableHeadings]
function Table(props) {
	const list = props.tableData?.map(item => <TableItem key={item.id} item={item} />)

	return (
		<Card className={classes.container} title={props.title}>
			<table>
				<TableHeader headings={props.tableHeadings} />
				<tbody>
					{list}
				</tbody>
			</table>
			<footer></footer>
		</Card>
	)
}

export default Table