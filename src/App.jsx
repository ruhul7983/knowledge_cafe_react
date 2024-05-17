import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import HeaderPart from './components/Header/HeaderPart'
function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);
  const handleBookmark = (title) =>{
   const newBookmark = [...bookmarks,title];
   setBookmark(newBookmark);
   console.log(title);
}

const handleMarkAsRead = (time) =>{
  setMarkAsRead(markAsRead + time);
  console.log(markAsRead);
}
  return (
    <>
      <HeaderPart></HeaderPart>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
        
        {
          <Bookmarks key={bookmarks.id} bookmark={bookmarks} time={markAsRead}></Bookmarks>
        }
      </div>
    </>
  )
}

export default App
