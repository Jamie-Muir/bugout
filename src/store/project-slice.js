import { createSlice } from "@reduxjs/toolkit";
import { replaceList, setStatus } from "./crud-functions";

const projectSlice = createSlice({
	name: 'projects',
	initialState: {
		list: [],
		status: null,
	},
	reducers: {
		replaceList,
		setStatus,
		addProject() {},
		removeProject() {},
		editProject() {},
	}
})

export const projectActions = projectSlice.actions;

export default projectSlice;
