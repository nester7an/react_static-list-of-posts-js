import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getCommsById(postId) {
  return commentsFromServer.filter(comm => comm.postId === postId);
}

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

const postsDetails = postsFromServer.map(post => ({
  ...post,
  comments: getCommsById(post.id),
  user: getUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postsDetails={postsDetails} />
  </section>
);
