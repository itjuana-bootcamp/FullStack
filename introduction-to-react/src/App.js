import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ListOfPost from './components/ListOfPost';
import getAllPosts from './resources/posts';
import FeaturedPost from './components/FeaturedPost';
import CreatePost from './components/CreatePost';

function App() {

  const [isCreateVisible, setIsCreateVisible] = useState(false)
  const [allPosts, setAllPosts] = useState(getAllPosts())
  const [postId, setPostId] = useState()

  const handleOnSave = post => {
    if (!postId)
      setAllPosts([...allPosts, post])
    else {
      const copyOfPosts = Array.from(allPosts)
      const result = copyOfPosts.filter((post, index) => index !== postId)
      setAllPosts([...result, post])
      setPostId()
    }
    setIsCreateVisible(false)
  }

  const handleOnEdit = postId => {
    setIsCreateVisible(true)
    setPostId(postId)
  }
 
  return (
    <div className="App">
     <NavBar
      onPress={() => setIsCreateVisible(true) }/>
     {
        isCreateVisible
        ? <CreatePost
            post={allPosts[postId]}
            onPress={() => setIsCreateVisible(false) }
            onSave={handleOnSave}
          />
        : <>
          <FeaturedPost
            updatedAt={"May 13 2021"}
            height={500}
            width={500}
            title={"The Internet of Medical Things: The Healthcare Revolution"}
            content={"Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."} 
            image={"https://itjuana.com/wp-content/uploads/2021/05/IoMT-The-Health-Revolution-image.png"}
          />
          <ListOfPost
            posts={allPosts}
            onEdit={handleOnEdit}
          />
        </>
     }
    </div>
  );
}

export default App;
