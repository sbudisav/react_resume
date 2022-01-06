import Post from './Post';
import { useReducer } from 'react';
import { Form, Button } from "react-bootstrap";

const postInitialState = {
  newPost: {
    title: '', 
    datePosted: '',
    content: ''
  },
  addDialog: false
}

const postReducer = (state, action) => {
  switch (action.type) {
    case 'set_new_post':
      return { ...state, newPost: action.post };
    case 'show_add_dialog':
      return { ...state, addDialog: action.showDialog }
    default:
      return state;
  }
};

const Posts = ({ posts }) => {

  const [postState, setPostState] = useReducer(postReducer, postInitialState);

  console.log(postState);

  return (
    <>
      <header className='header'>
        <h1>My Writings</h1>
      </header>

      { postState.addDialog === false && 
        <Button variant="primary" size="sm" onClick={() => setPostState({ type:'show_add_dialog', showDialog: true })}>
          New Post
        </Button>
      }

      { postState.addDialog === true && 
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" placeholder="Content" as="textarea"/>
          </Form.Group>

          <Button variant="primary" type="submit" size="sm">
            Submit
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => setPostState({ type:'show_add_dialog', showDialog: false })}>
            Cancel
          </Button>
        </Form>
      }

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default Posts;