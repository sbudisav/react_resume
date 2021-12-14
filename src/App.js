import { useState, useEffect } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Header from "./components/Header"
import Posts from "./components/writing/Posts"
import Paintings from "./components/art/Paintings"

function App() {

  const [posts, setPosts] = useState([]);

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


  return (
    <div>
      <div>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>Dashboard</MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
      
      <div className="container">
        <Header className="header"> </Header>
        <Posts
          posts={ posts }
        />
        <Paintings
          paintings={ paintings }
        />
      </div>
    </div>
  );
}

export default App;
