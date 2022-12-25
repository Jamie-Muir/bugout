export function getTableData(type) {
	const data = {
		projects: {
			headings: [
				'#',
				'Project Title',
				'Description',
				'Open Issues',
				'Status',
			],
			keys: [
				'id',
				'title',
				'description',
				'issueCount',
				'status',
			]
		},
		tickets: {
			headings: [
				'#',
				'Ticket Title',
				'Project',
				'Priority',
				'Status',
				'Category'
			],
			keys: [
				'id',
				'title',
				'project',
				'priority',
				'status',
				'category',
			]
		},
		users: {
			headings: [
				'#',
				'Username',
				'Email',
				'Role'
			],
			keys: [
				'id',
				'username',
				'email',
				'role'
			]
		},
	}

	return data[type]
}

function pickKeysFromObject(obj, idx, keys) {
	return keys.reduce((result, key) => ({ ...result, [key]: obj[key] }), { idx });
}

export function pickKeys(array, keys) {
	return array.map((item, idx) => pickKeysFromObject(item, idx, keys))
}