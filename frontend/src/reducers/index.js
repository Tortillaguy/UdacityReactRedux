import {combineReducers} from 'redux'

import {
	ADD_COMMENT
} from '../actions'


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
	postDetail
})