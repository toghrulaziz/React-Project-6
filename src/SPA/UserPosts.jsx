import React from 'react';


const UserPosts = () => {

   const posts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Post Title ${index + 1}`,
    content: `This is the content of post ${index + 1}`
  }));

  return (
    <div>
      <h2>User Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );

};

export default UserPosts;