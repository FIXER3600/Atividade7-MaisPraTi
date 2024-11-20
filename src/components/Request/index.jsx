import React, { useState,useEffect } from "react";

function Request() {
	const [posts,setPosts]=useState([])
	const [loading, setLoading] = useState(false);

	const fetchPosts = async () => {
		setLoading(true);
		try {
		  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		  const data = await response.json();
		  setPosts(data);
		} catch (error) {
		  console.error('Erro ao carregar os posts:', error);
		} finally {
		  setLoading(false);
		}
	      };
	    
	      useEffect(() => {
		fetchPosts();
	      }, []);
  return  <div>
  <h1>Lista de Posts</h1>
  {loading ? (
    <p>Carregando...</p>
  ) : (
    <ul>
      {posts.map((post) => (
	<li key={post.id}>
	  <h2>{post.title}</h2>
	  <p>{post.body}</p>
	</li>
      ))}
    </ul>
  )}
  <button onClick={fetchPosts} disabled={loading}>
    {loading ? 'Carregando...' : 'Recarregar Dados'}
  </button>
</div>;
}

export default Request;
