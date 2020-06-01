const updatePage = () => {
	return {
        type: 'PAGE_UPDATE',
	};
};

const addPost = ({ subject, content }) => {
    return {
        type: 'ADD_POST',
        payLoad: {
            subject,
            content,
        },
	};
};

const deletePost = key => {
    return {
        type: 'DELETE_POST',
        key,
	};
};

const starPost = key => {
    return {
        type: 'STAR_POST',
        key,
	};
};

const changePostContent = input => {
    return {
        type: 'CONTENT_CHANGE',
        input: input,
	};
};

const changePostSubject = input => {
    return {
        type: 'SUBJECT_CHANGE',
        input: input,
	};
};

const toggleCreatePostPopUp = () => {
    return {
        type: 'TOGGLE_CREATE_POST',
    };
};

const togglePostDetailPopUp = (key) => {
    return {
        type: 'TOGGLE_POST_DETAIL',
        key,
    };
};

const toggleStaredView = () => {
    return {
        type: 'TOGGLE_STARED_VIEW',
    }
};

const deleteAllPosts = () => {
    return {
        type: 'DELETE_ALL_POSTS',
    }
}

export {
    updatePage,
    addPost,
    changePostSubject,
    changePostContent,
    toggleCreatePostPopUp,
    deletePost,
    starPost,
    togglePostDetailPopUp,
    toggleStaredView,
    deleteAllPosts,
};
