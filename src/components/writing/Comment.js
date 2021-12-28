import Moment from 'react-moment';

const Comment = ({ comment }) => {
  return (
    <div>
      <h4>{ comment.username }</h4>
        <Moment format="MM/DD YYYY">
          { comment.date_posted } 
        </Moment>
      <p>{ comment.content }</p>
    </div>
  )
}

export default Comment;