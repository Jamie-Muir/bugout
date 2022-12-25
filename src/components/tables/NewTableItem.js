import React, { useState } from 'react';
import Card from '../UI/Card';

function NewTableItem(props) {
	const [showForm, setShowForm] = useState(false);

	const displayForm = showForm ? props.form : <></>;
	const showFormBtnText = !showForm ? 'Open' : 'Close';

	const onHide = () => setShowForm(prev => !prev)

	const formDisplayBtn = <button onClick={onHide}>{showFormBtnText}</button>

	return (
		<Card heading={props.heading} footer={formDisplayBtn}>
			{displayForm}
		</Card>
	)
}

export default NewTableItem;