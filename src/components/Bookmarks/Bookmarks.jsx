import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({bookmark}) => {
    return (
        <div className="md: w-1/3 ">
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