import { projectActions } from './project-slice';

const url = process.env.REACT_APP_FIREBASE_DOMAIN;

export const fetchTable = (type) => {
	return async (dispatch) => {

		const fetchData = async () => {
			const response = await fetch(`${url}/${type}.json`);

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

		try {
			dispatch(projectActions.setStatus('pending'))
			const data = await fetchData();
			dispatch(projectActions.replaceList(data))
			dispatch(projectActions.setStatus(null));
		} catch (error) {
			dispatch(projectActions.setStatus(error));
		}
	};
};