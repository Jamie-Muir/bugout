// Payload: String
// Default: null
// Expects: string, condition "pending" renders load spinner per table
export const setStatus = (state, action) => {
	return {
		...state,
		status: action.payload,
	}
}

// Payload: Array of objects for table
// Expects: [{}, {}, {}, ...]
export const replaceList = (state, action) => {
	return {
		...state,
		list: action.payload,
	}
}