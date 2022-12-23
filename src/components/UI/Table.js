import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

import classes from './Table.module.scss';

const TableHeader = (props) => {
	const headings = props.headings.map(item => <th key={item}> {item} </th>)

	return (
		<thead className={classes.tableHead}>
			<tr>
				{headings}
				<th style={{ width: '15%' }}>Actions</th>
			</tr>
		</thead>
	)
}

const TableButtons = (props) => {

	
	const handleClick = (e) => {
		e.stopPropagation();
	}

	return (
		<>
			<td onClick={handleClick}>
				<button>
					Delete
				</button>
			</td>
		</>
	)
}

const TableItem = (props) => {
	
	const values = Object.values(props.item);
	const itemId = values.shift(); //remove ID
	const entries = values.map((value, idx) => <td key={itemId+idx}> {value} </td>);

	const navigate = useNavigate();
	const handleClick = (e) => {
		navigate(`/${props?.type}/${itemId}`, { replace: false })
	}

	return (
		<tr onClick={handleClick}>
			{entries}
			<TableButtons
			/>
		</tr>
	)
}

// Requires props [tableData, tableHeadings]
function Table(props) {
	const list = props.tableData?.map(item => <TableItem key={item.id} item={item} type={props.type} />)

	return (
		<Card className={classes.container} heading={props.heading}>
			<div className={classes.tableContainer}>
				<table>
					<TableHeader headings={props.tableHeadings} />
					<tbody>
						{list}
					</tbody>
				</table>
			</div>
			<footer />
		</Card>
	)
}

export default Table