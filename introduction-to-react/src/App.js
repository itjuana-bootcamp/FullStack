import React, { useState } from "react";
import NavBar from "./components/NavBar";
import getAllPosts from "./resources/posts";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import JoinOurTeamPage from "./pages/JoinOurTeamPage";
import CreatePostPage from "./pages/CreatePostPage";
import NotFoundPage from './pages/NotFoundPage';
import DetailPostPage from './pages/DetailPostPage';

function App() {
  const [isCreateVisible, setIsCreateVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(getAllPosts());
  const [postId, setPostId] = useState();

  const navigate = useNavigate();

  const handleOnSave = (post) => {
    if (!postId) setAllPosts([...allPosts, post]);
    else {
      const copyOfPosts = Array.from(allPosts);
      const result = copyOfPosts.filter((post, index) => index !== postId);
      setAllPosts([...result, post]);
      setPostId();
    }
    navigate("/", {replace: true});
  };

  
  const handleOnEdit = (postId) => {
    setIsCreateVisible(true);
    setPostId(postId);
  };
  
  const getPostById = (postId) => allPosts[postId]
  return (
    <div className="App">
      <NavBar onPress={() => setIsCreateVisible(true)} />
      <Routes>
        <Route
          index
          element={<HomePage allPosts={allPosts} handleOnEdit={handleOnEdit} />}
        />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="join-our-team" element={<JoinOurTeamPage />} />
        <Route
          path="create-post"
          element={
            <CreatePostPage post={allPosts[postId]} onSave={handleOnSave} />
          }
        />
        <Route 
          path="post/:postId"
          element={<DetailPostPage onEdit={handleOnEdit} getPostById={getPostById} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <div>Footer</div>
    </div>
  );
}

export default App;
