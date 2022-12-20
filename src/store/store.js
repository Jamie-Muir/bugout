import { createSlice } from "@reduxjs/toolkit";

const initialState = { projects: [] }

const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		addProject() {},
		removeProject() {},
		editProject() {},
		populate() {},
	}
})



// export default store;