import Moment from 'react-moment';
import Comment from './Comment';
import { ListGroup, Button, Accordion } from "react-bootstrap";
import { useState, useEffect, useReducer } from 'react';
import request from '../services/request';

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const commentsFromServer = await request.getCommentsFromServer(post.id);
      commentsFromServer.sort(function(a,b){
        return new Date(b.date_posted) - new Date(a.date_posted)
      });
      setComments(commentsFromServer);
    };
    getComments();
  }, []);
  // Last array is dependency array, put add comment in there so it updates after anyone adds comment. 

  return (
    <header>
      <h2>{ post.title }</h2>
      <h6>
        <Moment format="MM/DD YYYY">
          { post.date_posted }
        </Moment>
      </h6>
      <p>{ post.content }</p>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header id="accordian-button-override">See Comments</Accordion.Header>
          <Accordion.Body>
            {comments.length > 0 &&
            <ListGroup variant="flush">
              {comments.map((comment) => (
                <ListGroup.Item>
                  <Comment key={comment.id} comment={comment} />
                </ListGroup.Item>
              ))}
              </ListGroup>
            }
            {comments.length === 0 &&
              <h6 className="comments-section"> No Comments </h6>
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </header>
  )
}

export default Post;