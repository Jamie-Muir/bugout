

export async function addEntry(projectData, type) {
	const response = await fetch(`${process.env.REACT_APP_FIREBASE_DOMAIN}/${type}.json`, {
		method: 'POST',
		body: JSON.stringify(projectData),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || `Could not create ${type}.`);
	}
	return null;
}

export async function getAllEntries(type) {
	const response = await fetch(`${process.env.REACT_APP_FIREBASE_DOMAIN}/${type}.json`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || `Could not fetch ${type}.`);
	}

	const transformedData = [];

	for (const key in data) {
		const dataObj = {
			id: key,
			...data[key],
		};

		transformedData.push(dataObj);
	}

	return transformedData;
}

export async function getSingleEntry(entryId, type) {
	const response = await fetch(`${process.env.REACT_APP_FIREBASE_DOMAIN}/${type}/${entryId}.json`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch Entry.');
	}

	const loadedEntry = {
		id: entryId,
		...data,
	};

	return loadedEntry;
}