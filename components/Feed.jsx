"use client"

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    // Fetch all post API endpoint
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      console.log("DATA", data);
      setPosts(data);
    }
    
    fetchPosts();
  }, [])
  
  console.log("POSTS", posts);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* PromptCardList is a component that only going to be used within this specific "Feed"
          So, we can created right here above our functional component */}
      <PromptCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed