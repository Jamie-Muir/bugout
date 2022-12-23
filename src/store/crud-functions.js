export const setStatus = (state, action) => {
	return {
		...state,
		status: action.payload,
	}
}

export const replaceList = (state, action) => {
	return {
		...state,
		list: action.payload,
	}
}