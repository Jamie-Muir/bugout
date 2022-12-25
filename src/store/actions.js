import { projectSlice, ticketSlice, userSlice } from './list-slice';
import { fetchData } from '../lib/fetchLib';

const url = process.env.REACT_APP_FIREBASE_DOMAIN;
const actionArray = [projectSlice, ticketSlice, userSlice];

export const fetchTable = (type) => {
	return async (dispatch) => {

		// Find which slice.name matches the source type of the caller
		// return actions from that slice
		const actionName = actionArray.find(idx => idx.name === type).actions;

		try {
			dispatch(actionName.setStatus('pending'));

			const data = await fetchData(url, type);

			dispatch(actionName.replaceList(data));
			dispatch(actionName.setStatus('resolved'));

		} catch (error) {
			dispatch(actionName.setStatus('error'));

		}
	};
};