import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTable } from '../../store/actions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Table from './components/Table';
import { getTableData, pickKeys } from './components/TableUtils';

function List(props) {
	const dispatch = useDispatch();
	const storedList = useSelector((state) => state[props.type]?.list);
	const status = useSelector((state) => state[props.type]?.status);

	useEffect(() => {
		if(storedList.length) return;
		dispatch(fetchTable(props.type));

	}, [dispatch, storedList, props.type]);

	if(status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		)
	}

	const tableData = getTableData(props.type);
	const tableValues = pickKeys(storedList, tableData.keys);

	return (
		<Table
			heading={props.heading}
			type={props.type}
			tableHeadings={tableData.headings}
			tableValues={tableValues}
		/>
	)
}

export default List;