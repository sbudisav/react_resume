const Comment = ({ comment }) => {
  return (
    <div>
      <h4>{ comment.username }</h4>
      <p>{ comment.content }</p>
    </div>
  )
}

export default Post;