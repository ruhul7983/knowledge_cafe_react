import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-gray-400">
            <h1 className="ml-2 mt-2 py-3 bg-gray-200">{bookmark.cover_title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
}

export default Bookmark;