import React, { useState, useEffect, useMemo } from "react";

function CachedAPI() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [limit]);

  const cachedPosts = useMemo(() => {
    return posts.slice(0, limit);
  }, [posts, limit]);

  return (
    <div>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cachedPosts.map((post) => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CachedAPI;