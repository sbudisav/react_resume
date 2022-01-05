export default {

  getPostsFromServer: async () => {
    const res = await fetch('http://localhost:5000/posts');
    const data = await res.json();
    return data;
  },

  getCommentsFromServer: async (post_id) => {
    const res = await fetch(`http://localhost:5000/comments?post_id=${post_id}`);
    const data = await res.json();
    return data;
  },

  getPaintingsFromServer:  async () => {
    const res = await fetch('http://localhost:5000/paintings');
    const data = await res.json();
    return data;
  }
};