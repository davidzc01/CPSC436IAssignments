import { combineReducers } from 'redux';
const { actions } = require('../Utils/constants')

const initPostsJSON = '['
+ '{"key": "1", "subject": "subject 1", "content": "test content 1", "stared": true},' 
+ '{"key": "2", "subject": "subject 2", "content": "test content 2", "stared": false},'
+ '{"key": "3", "subject": "subject 3", "content": "test content 3", "stared": true}'
+ ']'

const pageReducer = (isHome = true, action) => {
	if (action.type === actions.UPDATE_PAGE) {
		isHome = !isHome;
	}
	return isHome;
};

const postReducer = (posts = JSON.parse(initPostsJSON), action) => {
	switch (action.type) {
		case actions.CREATE_POST:
			let newKey = Math.floor(Math.random() * 100);
			// eslint-disable-next-line
			// while (posts.find(post => post.key === newKey)) {
			// 	newKey = Math.floor(Math.random() * 100);
			// }
			return [
					...posts,
					{ 
						key: newKey,
						selected: false,
						subject: action.payLoad.subject,
						content: action.payLoad.content,
						stared: false 
					}
				];
		case actions.DELETE_POST:
			return posts.filter(post => post.key !== action.key);
		case actions.UPDATE_POST:
			return posts.reduce((posts, post) => {
				if (post.key === action.key) {
					post.stared = action.payLoad.stared;
					post.subject = action.payLoad.subject;
					post.content = action.payLoad.content;
				}
				return [...posts, post]
			}, []);
		default:
			return posts;
	}
}

const selectedPostReducer = (selectedPosts = [], action) => {
	switch (action.type) {
		case actions.SELECT_POST:
			if (selectedPosts.includes(action.key)) {
				selectedPosts.filter(postKey => postKey !== action.key);
			} else {
				selectedPosts.push(action.key)
			}
			return selectedPosts;
		case actions.DELETE_POST:
			if (selectedPosts.includes(action.key)) {
				selectedPosts.filter(postKey => postKey !== action.key);
			}
			return selectedPosts;
		default:
			return selectedPosts;
	}
}

const postSubjectReducer = (input = '', action) => {
	if (action.type === actions.SUBJECT_CHANGE) {
		return action.input;
	}
	if ([actions.TOGGLE_VIEW_POP_UP, actions.TOGGLE_CREATE_POP_UP].includes(action.type)) {
		return '';
	}
	return input;
}

const postContentReducer = (input = '', action) => {
	if (action.type === actions.CONTENT_CHANGE) {
		return action.input;
	}
	if ([actions.TOGGLE_VIEW_POP_UP, actions.TOGGLE_CREATE_POP_UP].includes(action.type)) {
		return '';
	}
	return input;
}

const createPostPopUpReducer = (showCreatePopUp = false, action) => {
	if ([actions.TOGGLE_CREATE_POP_UP, actions.CREATE_POST].includes(action.type)) {
		showCreatePopUp = !showCreatePopUp;
	}
	return showCreatePopUp;
}

const postDetailPopUpReducer = (showPostDetailPopUp = {show: false, key:undefined}, action) => {
	if (action.type === actions.TOGGLE_VIEW_POP_UP) {
		return {
			show: !showPostDetailPopUp.show,
			key: action.key,
		};
	}
	return showPostDetailPopUp;
}

const editPostPopUpReducer = (showEditPostPopUp = {show: false, key:undefined}, action) => {
	if (action.type === actions.TOGGLE_EDIT_POP_UP) {
		return {
			show: !showEditPostPopUp.show,
			key: action.key,
		};
	}
	return showEditPostPopUp;
}

const viewReducer = (showAll = true, action) => {
	if (action.type === actions.TOGGLE_SHOW_MODE) {
		showAll = !showAll;
	}
	return showAll;
}

export default combineReducers({
	isHome: pageReducer,
	posts: postReducer,
	postSubject: postSubjectReducer,
	postContent: postContentReducer,
	createPostPopUpOpen: createPostPopUpReducer,
	showPostDetailPopUp: postDetailPopUpReducer,
	viewType: viewReducer,
	selectedPosts: selectedPostReducer,
	editPostPopUpOpen: editPostPopUpReducer,
});

