import React from 'react'
import { Row } from 'react-bootstrap'
import YTComment from 'youtube-api-comment'
import { useDispatch, useSelector } from 'react-redux'
import { Comment } from "../interfaces"
import { RootState } from '../store/store'
import CommentItem from './CommentItem'
import { setComments } from '../store/Reducers'
import _ from 'lodash'
import { CloudMinus } from 'react-bootstrap-icons'

function CommentWrapper() {

    const dispatch = useDispatch()
    const selectedVideo = useSelector((state: RootState) => state.youtube.selectedVideo)
    const API_KEY = useSelector((state: RootState) => state.youtube.API_KEY)
    const comments = useSelector((state: RootState) => state.youtube.comments)

    React.useEffect(() => {
        selectedVideo && API_KEY !== '' &&
        YTComment({ key: API_KEY, videoId: selectedVideo.id.videoId, maxResults: 10, textFormat: 'plainText', part: 'snippet' }, (comments: Array<Comment>) => {
            dispatch(setComments(comments))
        })
    }, [selectedVideo])

    const commentItems = !_.isEmpty(comments) ? _.map(comments, (comment) => <CommentItem comment={comment} key={comment.id}/>) : <div>No comments found</div>

    return (
        <div className='Comments col-md-12'>
            <div className='CommentsTitle col-md-12'>Comments</div>
            <Row >
                <div className='CommentSection col-md-8'>
                    {commentItems}
                </div>
            </Row>
        </div>
    )
}

export default CommentWrapper