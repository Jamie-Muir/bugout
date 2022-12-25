import { createSlice } from "@reduxjs/toolkit";
import { replaceList, setStatus } from "./crud-functions";

const createListSlice = (name) =>
	createSlice({
			name: name,
			initialState: {
				list: [],
				status: null,
			},
			reducers: {
				replaceList,
				setStatus,
			}
		}
	);

export const projectSlice = createListSlice('projects');
export const ticketSlice = createListSlice('tickets');
export const userSlice = createListSlice('users');