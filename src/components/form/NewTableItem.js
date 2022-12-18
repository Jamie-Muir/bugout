import React, { useState } from 'react';
import Card from '../UI/Card';

function NewTableItem(props) {
	const [showForm, setShowForm] = useState(false);

	const displayForm = showForm ? props.form : <></>;
	const showFormBtnText = !showForm ? 'Open' : 'Close';

	const onHide = () => setShowForm(prev => !prev)

	return (
		<Card title={props.title}>
			{displayForm}
			<footer>
				<button onClick={onHide}>
					{showFormBtnText}
				</button>
			</footer>
		</Card>
	)
}

export default NewTableItem;