import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import HeaderPart from './components/Header/HeaderPart'
function App() {
  const [bookmarks, setBookmark] = useState([]);
  const handleBookmark = (title) =>{
   const newBookmark = [...bookmarks,title];
   setBookmark(newBookmark);
   console.log(title);
}
  return (
    <>
      <HeaderPart></HeaderPart>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleBookmark={handleBookmark} ></Blogs>
        
        {
          <Bookmarks key={bookmarks.id} bookmark={bookmarks}></Bookmarks>
        }
      </div>
    </>
  )
}

export default App
