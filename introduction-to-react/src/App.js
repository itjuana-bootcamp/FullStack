import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ContactUsPage from "./pages/ContactUsPage";
import CreatePostPage from "./pages/CreatePostPage";
import DetailPostPage from './pages/DetailPostPage';
import HomePage from "./pages/HomePage";
import JoinOurTeamPage from "./pages/JoinOurTeamPage";
import NavBar from "./components/NavBar";
import NotFoundPage from './pages/NotFoundPage';

import { getPosts, savePost, updatePost, deletePost } from './api/postsApi';

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = async () => {
    const posts = await getPosts()
    setAllPosts(posts)
  }

  const handleOnSave = async post => {
    const savedPost = await savePost(post);
    if (savedPost)
      setAllPosts([...allPosts, savedPost]);
    navigate("/", {replace: true});
  };

  const handleOnEdit = async (postId, post) => {
    const editedPost = await updatePost(postId, post)
    if (editedPost) {
      const copyOfPosts = Array.from(allPosts);
      const result = copyOfPosts.filter(post => post._id !== postId)
      setAllPosts([...result, editedPost]);
    }
    navigate("/", {replace: true});
  };

  const handleOnDelete = async id => {
    const isDeleted = await deletePost(id)
    if (isDeleted) {
      const copyOfPosts = Array.from(allPosts);
      const result = copyOfPosts.filter(post => post._id !== id)
      setAllPosts(result);
      navigate("/", {replace: true});
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          index
          element={<HomePage allPosts={allPosts} />}
        />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="join-our-team" element={<JoinOurTeamPage />} />
        <Route
          path="create-post"
          element={
            <CreatePostPage onSave={handleOnSave} />
          }
        />
        <Route
          path="create-post/:postId"
          element={
            <CreatePostPage onSave={handleOnEdit} />
          }
        />
        <Route 
          path="post/:postId"
          element={<DetailPostPage onDelete={handleOnDelete}/>}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <div>Footer</div>
    </div>
  );
}

export default App;
