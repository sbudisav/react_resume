import Post from './Post'

// Will have to import comments, onEdit, onDelete, etc

const Posts = ({ posts }) => {

  return (
    <>
      <header className='header'>
        <h1>My Writings</h1>
      </header>

      {posts.map((post, id) => (
        <Post key={id} post={post} />
      ))}
    </>
  )
}

export default Posts;