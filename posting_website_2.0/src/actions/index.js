import axios from '../axios/axios'
import { actions } from '../utils/constants'

const updatePage = () => ({
        type: actions.UPDATE_PAGE,
	}
);

const _createPost = ({ key, subject, content }) => ({
        type: actions.CREATE_POST,
        payLoad: {
            key,
            subject,
            content,
        },
    }
);

const createPost = ({ subject, content }) =>  {
    return (dispatch) => {
        const post = {
            subject,
            content,
            stared: false,
        }
        return axios.post('/posts/create',post).then(result => {
            dispatch(_createPost(result.data))
        });
    }
}

const _deletePost = (key) =>({
        type: actions.DELETE_POST,
        key,
	}
);

const deletePost = key => {
    return (dispatch) => {
        return axios.delete(`/api/posts/${key}`).then(() => {
            dispatch(_deletePost(key))
        });
    }
}

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

const updatePost = (key, { subject, content, stared }) => {
    return (dispatch) => {
        return axios.put(`/api/posts/${key}`, { subject, content, stared }).then(() => {
            dispatch(_updatePost(key, { subject, content, stared }));
        });
    }
}

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

const toggleMobileMenu = (anchorEl) => {
    return {
        type: actions.TOGGLE_MOBILE_MENU,
        anchorEl,
    }
}

const _getPosts = (posts) => ({
    type: actions.GET_POSTS,
    posts,
})

const getPosts = () => {
    return (dispatch) => {
        return axios.get('/api/posts').then(result => {
            const posts = [];
 
            result.data.forEach(item => {
                posts.push(item);
            });
 
            dispatch(_getPosts(posts));
        });
    };
}

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
    getPosts,
    toggleMobileMenu,
};
