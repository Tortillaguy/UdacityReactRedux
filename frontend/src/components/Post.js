import React from 'react'
import GoArrowUp from 'react-icons/lib/go/arrow-up';

var inline = {
	display: 'inline'
}

var viewbox = {
	fontSize : '30px'
}


export default function Post({postData, upVote}){
	return (
		<div className='post'>
		<GoArrowUp style={viewbox} onClick={()=>upVote(postData)}/>
		{/*<UpArrow style={inline} />*/}
		<h1 style={inline}>{postData.voteScore} </h1>
		<h3 className='header' style={inline}>{postData.title}</h3><p style={inline}> by <i>{postData.author}</i></p>
		<p>{postData.body}</p>
		</div>
	)
}