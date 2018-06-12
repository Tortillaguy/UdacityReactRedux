export const ADD_COMMENT = 'ADD_COMMENT'

export function addComment({post, comment}) {
	return {
		type: ADD_COMMENT,
		post, 
		comment,
	}
}