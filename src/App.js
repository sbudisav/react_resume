import { useState, useEffect, useReducer } from 'react'
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from "./components/writing/Posts"
import Paintings from "./components/art/Paintings"
import Sidebar from "./components/Sidebar"

const initialViewState = {
  view: 'home-page'
  //editPostDetails: {}
};

// view.view is what the current state has. Need to make that easier to read. 
const viewReducer = (state, action) => {
  switch (action.type) {
    case 'set_view':
      return { ...state, view: action.view.selectedKey };
    default:
      return state;
  }
};

function App() {

  const [posts, setPosts] = useState([]);
  const [view, setView] = useReducer(viewReducer, initialViewState);

  useEffect(()=> {
    const getPosts = async () => {
      const postsFromServer = await fetchPostContent()
      setPosts(postsFromServer)
    }
    getPosts();
  }, [])
  // Last array is dependency array, put add blog post in there so it updates after adding. 

  const fetchPostContent = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()
    return data;
  }

  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const getPaintings = async () => {
      const paintingsFromServer = await fetchPaintings()
      setPaintings(paintingsFromServer)
    }
    getPaintings();
  }, [])

  const fetchPaintings = async () => {
    const res = await fetch('http://localhost:5000/paintings')
    const data = await res.json()
    return data;
  }

  useEffect(() => {
    console.log(view.view);
  }, [view]);

  return (
    <>
      <div className='container'>
        <Row>
          <Col lg={1}>
            <Sidebar 
              setPageView={selectedKey => {
                setView({ type: 'set_view', view: selectedKey})
              }}
            />
          </Col>
          {view.view === 'writing-page' &&
            <Col lg={10}>

                <Posts posts={ posts } />
            </Col>
          }
          {view.view === 'art-page' &&
            <Col lg={10} className="paintings">
                <Paintings
                  paintings={ paintings }
                />
            </Col>
          }

        </Row>
      </div>
    </>
  );
}

export default App;
