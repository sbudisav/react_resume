import { useEffect, useReducer } from 'react'
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from "./components/writing/Posts"
import Paintings from "./components/art/Paintings"
import Sidebar from "./components/Sidebar"
import request from './components/services/request';

const initialViewState = {
  view: 'home-page',
  posts: [],
  paintings: []
};

const viewReducer = (state, action) => {
  switch (action.type) {
    case 'set_page':
      return { ...state, page: action.page.selectedKey };
    case 'set_posts':
      return { ...state, posts: action.posts };
    case 'set_paintings':
      return { ...state, paintings: action.paintings };
    default:
      return state;
  }
};

function App() {
  const [view, setView] = useReducer(viewReducer, initialViewState);

  // to do, add all paints and posts to reducer

  useEffect(()=> {
    const getPosts = async () => {
      const postsFromServer = await request.getPostsFromServer();
      postsFromServer.sort(function(a,b){
        return new Date(b.date_posted) - new Date(a.date_posted)
      });
      setView({type: 'set_posts', posts: postsFromServer });
    }
    getPosts();
  }, [])
  // Last array is dependency array, put add blog post in there so it updates after adding. 

  useEffect(() => {
    const getPaintings = async () => {
      const paintingsFromServer = await request.getPaintingsFromServer();
      setView({type: 'set_paintings', paintings: paintingsFromServer });
    }
    getPaintings();
  }, [])


  return (
    <>
      <div className='container'>
        <Row>
          <Col lg={1}>
            <Sidebar 
              setPageView={selectedKey => {
                setView({ type: 'set_page', page: selectedKey})
              }}
            />
          </Col>
          {view.page === 'writing-page' &&
            <Col lg={10}>

                <Posts posts={ view.posts } />
            </Col>
          }
          {view.page === 'art-page' &&
            <Col lg={10} className="paintings">
                <Paintings
                  paintings={ view.paintings }
                />
            </Col>
          }

        </Row>
      </div>
    </>
  );
}

export default App;
