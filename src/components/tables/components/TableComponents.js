import { useNavigate } from "react-router-dom"
import classes from './Table.module.scss';

export const TableHeader = (props) => {
	const headings = props.headings.map(item => <th key={item}> {item} </th>)

	return (
		<thead className={classes.tableHead}>
			<tr>
				{headings}
				<th>Actions</th>
			</tr>
		</thead>
	)
}

export const TableButtons = (props) => {
	const handleClick = (e) => e.stopPropagation();

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

export const TableRow = (props) => {
	const {id, ...item} = props.item;
	const tableCells = Object.values(item).map((value, idx) => <td key={id + idx}> {value} </td>);

	const navigate = useNavigate();
	const handleClick = (e) => {
		navigate(`/${props?.type}/${id}`, { replace: false })
	}

	return (
		<tr onClick={handleClick}>
			{tableCells}
			<TableButtons />
		</tr>
	)
}

export const TableBody = (props) => {
	const getRow = (item) => <TableRow key={item.id} item={item} type={props.type} />
	const tableRows = props.tableValues?.map(item => getRow(item))
	
	return (
		<tbody>
			{tableRows}
		</tbody>
	)

}