import Post from './Post'

// Will have to import comments, onEdit, onDelete, etc
const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post, id) => (
        <Post key={id} post={post} />
      ))}
    </>
  )
}

export default Posts;