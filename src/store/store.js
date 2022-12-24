import { configureStore } from "@reduxjs/toolkit";

import { projectSlice, ticketSlice, userSlice } from './list-slice';

const store = configureStore({
	reducer: {
		projects: projectSlice.reducer,
		tickets: ticketSlice.reducer,
		users: userSlice.reducer,
	},
});

export default store;