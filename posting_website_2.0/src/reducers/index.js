import { combineReducers } from 'redux';

const initPostsJSON = '['
+ '{"key": "1", "subject": "subject 1", "content": "test content 1", "stared": true},' 
+ '{"key": "2", "subject": "subject 2", "content": "test content 2", "stared": false},'
+ '{"key": "3", "subject": "subject 3", "content": "test content 3", "stared": true}'
+ ']'

const pageReducer = (isHome = true, action) => {
	if (action.type === 'PAGE_UPDATE') {
		isHome = !isHome;
	}
	return isHome;
};

const postReducer = (posts = JSON.parse(initPostsJSON), action) => {
	if (action.type === 'ADD_POST') {
		let newKey = Math.floor(Math.random() * 100);
		// eslint-disable-next-line
		while (posts.find(post => post.key === newKey) !== undefined) {
			newKey = Math.floor(Math.random() * 100);
		}
		return [...posts, { key: newKey, subject: action.payLoad.subject, content: action.payLoad.content, stared: false }];
	}
	if (action.type === 'DELETE_POST') {
		return posts.filter(post => post.key !== action.key);
	}
	if (action.type === 'DELETE_ALL_POSTS') {
		return [];
	}
	if (action.type === 'STAR_POST') {
		return posts.reduce((posts, post) => {
			if (post.key === action.key) {
				post.stared = !post.stared;
			}
			return [...posts, post]
		}, []);
	}
	return posts;
}

const postSubjectReducer = (input = '', action) => {
	if (action.type === 'SUBJECT_CHANGE') {
		return action.input;
	}
	return input;
}

const postContentReducer = (input = '', action) => {
	if (action.type === 'CONTENT_CHANGE') {
		return action.input;
	}
	return input;
}

const createPostPopUpReducer = (showCreatePopUp = false, action) => {
	if (['TOGGLE_CREATE_POST', 'ADD_POST'].includes(action.type)) {
		showCreatePopUp = !showCreatePopUp;
	}
	return showCreatePopUp;
}

const postDetailPopUpReducer = (showPostDetailPopUp = {show: false, key:undefined}, action) => {
	if (action.type === 'TOGGLE_POST_DETAIL') {
		return {
			show: !showPostDetailPopUp.show,
			key: action.key,
		};
	}
	return showPostDetailPopUp;
}

const viewReducer = (viewType = 'NORMAL', action) => {
	if (action.type === 'TOGGLE_STARED_VIEW') {
		viewType = viewType !== 'STARED' ? 'STARED' : 'NORMAL';
	}
	return viewType;
}

export default combineReducers({
	isHome: pageReducer,
	posts: postReducer,
	postSubject: postSubjectReducer,
	postContent: postContentReducer,
	createPostPopUpOpen: createPostPopUpReducer,
	showPostDetailPopUp: postDetailPopUpReducer,
	viewType: viewReducer,
});

