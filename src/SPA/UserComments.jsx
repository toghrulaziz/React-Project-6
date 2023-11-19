import React from 'react';

const UserComments = () => {

  const comments = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    text: `Comment ${index + 1}: This is a sample comment.`
  }));

  return (
    <div>
      <h2>User Comments</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );

};

export default UserComments;