

const Post = ({ post }) => {
  return (
    <header>
      <h1>{ post.title }</h1>
      <h4>{ post.content }</h4>
    </header>
  )
}

export default Post;