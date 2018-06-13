export const ADD_COMMENT = 'ADD_COMMENT'
export const UPVOTE = 'UPVOTE'

export function upVote(post){
	console.log(post);
	return {
		type: UPVOTE,
		post,
	}
}

export function addComment({post, comment}) {
	return {
		type: ADD_COMMENT,
		post, 
		comment,
	}
}