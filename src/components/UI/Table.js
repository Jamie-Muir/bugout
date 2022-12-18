import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

import classes from './Table.module.scss';

const TableHeader = (props) => {
	const headings = props.headings.map(item => <th key={item}> {item} </th>)

	return (
		<thead className={classes.tableHead}>
			<tr>
				{headings}
				<th style={{ width: '15%' }}></th>
			</tr>
		</thead>
	)
}

const TableButtons = (props) => {
	return (
		<>
			<td>
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

	const navigate = useNavigate();
	const handleClick = useCallback(() => {
		navigate(`/${props?.type}/${props.item.id}`, {replace: false})
	}, [props.item.id, props.type, navigate])
	
	return (
		<tr onClick={handleClick}>
			{entries}
			<TableButtons 
				id={props.item.id} 
			/>
		</tr>
	)
}

// Requires props [tableData, tableHeadings]
function Table(props) {
	const list = props.tableData?.map(item => <TableItem key={item.id} item={item} type={props.type} />)

	return (
		<Card className={classes.container} title={props.title}>
			<table>
				<TableHeader headings={props.tableHeadings} />
				<tbody>
					{list}
				</tbody>
			</table>
			<footer />
		</Card>
	)
}

export default Table