import {combineReducers} from 'redux'

import {
	ADD_COMMENT, 
	UPVOTE
} from '../actions'

function castUpVote(state = {}, action){
	console.log(action);
	switch(action.type){
		case UPVOTE :
		const {post} = action;
		post.voteScore = post.voteScore+1;
		return {
			...post, 
			voteScore: post.voteScore+1,
		}
		default:
		return state;
	}
}

const initialState = {
	posts : [],
}

function postDetail(state = initialState, action){
	const {post, comment} = action;

	switch(action.type){
		case ADD_COMMENT : 
			return state;
		default :
			return state;
	}
}

export default combineReducers({
	postDetail,
	castUpVote
})