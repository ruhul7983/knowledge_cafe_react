import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark, handleMarkAsRead}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[]);



    return (
        <div className="md: w-2/3">
            {
                blogs.map(blog =><Blog handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};



export default Blogs;