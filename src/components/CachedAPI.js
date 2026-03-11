import React, { useState, useEffect, useMemo } from "react";

function CachedAPI() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const cachedPosts = useMemo(() => {
    return posts;
  }, [posts]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {cachedPosts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CachedAPI;