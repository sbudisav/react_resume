import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Posts from "./components/writing/Posts"

function App() {

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(()=> {
    const getBlogPosts = async () => {
      const blogContentFromServer = await fetchBlogContent()
      setBlogPosts(blogContentFromServer)
    }
    getBlogPosts()

    console.log(blogPosts);
  }, [])
  // Last array is dependency array, put add blog post in there so it updates after adding. 

  // Fetch Blog
  // Seperate incase I need to call this seperately 
  const fetchBlogContent = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()
    return data
  }


  return (

    <div className="container">
      <Header className="header"> </Header>
      <Posts
        posts={ blogPosts }
      />
    </div>
  );
}

export default App;
