const { actions } = require('../Utils/constants')

const updatePage = () => ({
        type: actions.UPDATE_PAGE,
	}
);

const _createPost = ({ subject, content }) => ({
        type: actions.CREATE_POST,
        payLoad: {
            subject,
            content,
        },
    }
);

const createPost = ({ subject, content }) =>  _createPost({ subject, content });

const _deletePost = key =>({
        type: actions.DELETE_POST,
        key,
	}
);

const deletePost = key => _deletePost(key);

const selectPost = key => ({
    type: actions.SELECT_POST,
    key,
});

const _updatePost = (key, { subject, content, stared }) => ({
    type: actions.UPDATE_POST,
    key,
    payLoad: {
        subject,
        content,
        stared,
    }
});

const updatePost = (key, { subject, content, stared }) => _updatePost(key, { subject, content, stared });

const changePostContent = input => {
    return {
        type: actions.CONTENT_CHANGE,
        input: input,
	};
};

const changePostSubject = input => {
    return {
        type: actions.SUBJECT_CHANGE,
        input: input,
	};
};

const toggleCreatePostPopUp = () => {
    return {
        type: actions.TOGGLE_CREATE_POP_UP,
    };
};

const togglePostDetailPopUp = (key) => {
    return {
        type: actions.TOGGLE_VIEW_POP_UP,
        key,
    };
};

const toggleEditPostPopUp = (key) => {
    return {
        type: actions.TOGGLE_EDIT_POP_UP,
        key,
    };
};

const toggleShowMode = () => {
    return {
        type: actions.TOGGLE_SHOW_MODE
    };
};

export {
    updatePage,
    createPost,
    changePostSubject,
    changePostContent,
    toggleCreatePostPopUp,
    deletePost,
    updatePost,
    selectPost,
    togglePostDetailPopUp,
    toggleEditPostPopUp,
    toggleShowMode,
};
