import moment from 'moment'
import { Row, Col } from 'react-bootstrap'
import { Comment, TopLevelComment } from '../interfaces'

interface CommentItemProps {
    comment: Comment
}

function CommentItem(props: CommentItemProps) {

    const dateFormatter = (date: string) => {
        const formatDate: string = moment(date).format('DD MMM YY')
        return formatDate
    }

    const displayCommentDate = (topLevelComment: TopLevelComment): JSX.Element => {
        if (topLevelComment?.snippet?.publishedAt === topLevelComment?.snippet?.updatedAt) {
            return <p id='date'>{dateFormatter(topLevelComment.snippet.publishedAt)}</p>
        }
        else if (topLevelComment?.snippet?.publishedAt !== topLevelComment?.snippet?.updatedAt) {
            return <p>
                <span id='date'>{dateFormatter(topLevelComment.snippet.updatedAt)}</span>
                <span id='edited'>{' (Edited)'}</span>
            </p>
        }
        else {
            return <p />
        }
    }

    const imageUrl: string = props.comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
    const topLevelComment: TopLevelComment = props.comment.snippet.topLevelComment;

    return (
        <div className='commentWrapper'>
            <Row>
                <Col className='authorImage col-md-2'>
                    <img className="authorImage-object" src={imageUrl} alt={''} />
                </Col>
                <Col className='CommentDataSection col-md-8'>
                    <div className="commentDate authorName">
                        <div className = "authornameSpacing">
                            {topLevelComment.snippet.authorDisplayName}
                        </div>
                        <div>
                            {displayCommentDate(topLevelComment)}
                        </div>
                    </div>
                    <p className="commentText" >
                        {topLevelComment.snippet.textDisplay}
                    </p>
                    <p className="likes" >
                        {topLevelComment.snippet.likeCount + ' Likes'}
                    </p>
                </Col>
            </Row>
        </div>
    )

}

export default CommentItem