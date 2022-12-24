import { createSlice } from "@reduxjs/toolkit";
import { replaceList, setStatus } from "./crud-functions";

const createListSlice = (name) => {
	return {
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
}

export const projectSlice = createSlice(createListSlice('projects'));
export const ticketSlice = createSlice(createListSlice('tickets'));
export const userSlice = createSlice(createListSlice('users'));