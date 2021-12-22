import Moment from 'react-moment';

const Post = ({ post, comment }) => {

  const [comments, setComments] = useState([]);

  useEffect(()=> {
    const getComments = async () => {
      const commentsFromServer = await fetchCommentContent();
      setComments(commentsFromServer);
    }
    getCommment();
  }, [])
  // Last array is dependency array, put add blog post in there so it updates after adding. 

  const fetchCommentContent = async () => {
    const res = await fetch('http://localhost:5000/comments');
    const data = await res.json();
    return data;
  }


  // Need to do a couple things
  // a. Can I add the comments to the original state via use reducer
  // b. I need to grab comments based on ID but look up how to do that via api

  return (
    <header>
      <h2>{ post.title }</h2>
      <h6>
        <Moment format="MM/DD YYYY">
          { post.date_posted }
        </Moment></h6>
      <p>{ post.content }</p>

      <ListGroup>
        {comments.map((post, id) => (
          <ListGroup.Item>
            <Comment key={id} comment={comment} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </header>
  )
}

export default Post;