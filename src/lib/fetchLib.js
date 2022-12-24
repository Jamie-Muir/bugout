const urlBuilder = (...args) => {
	return args.join('/') + '.json';
}

export const fetchData = async (firebase, type) => {
	const url = urlBuilder(firebase, type);
	const response = await fetch(url);

	if (!response.ok) throw new Error('Could not fetch data');

	const data = await response.json();

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