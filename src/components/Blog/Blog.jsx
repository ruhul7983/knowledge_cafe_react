import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
    const { cover_title, author, author_img, cover_img, posted_date, reading_time,hashtags, } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-x-3'>
                    <img className='' src={author_img} alt="" />
                    <div>
                        <h1 className='font-bold'>{author}</h1>
                        <h1>{posted_date}</h1>
                    </div>
                </div>
                <div className='flex items-center gap-x-3'>
                    <h1>{reading_time} min read</h1>
                    <button onClick={()=>handleBookmark(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h1 className="text-4xl">{cover_title}</h1>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href=''>#{hash} </a></span>)
                }
            </p>    
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-red-600'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.object,
    handleMarkAsRead: PropTypes.func
}

export default Blog;