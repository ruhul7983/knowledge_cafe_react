import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({bookmark, time}) => {
    return (
        <div className="md: w-1/3 ">
            <h1 className="bg-gray-400 p-5 rounded ml-2">Spending Time on reading {time}</h1>
            {
                bookmark.map(book=><Bookmark bookmark={book} key={book.id}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmark: PropTypes.array
};

export default Bookmarks;