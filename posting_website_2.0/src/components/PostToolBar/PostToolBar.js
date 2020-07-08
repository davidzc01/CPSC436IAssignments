import React from 'react';
import { connect } from 'react-redux';
import { toggleCreatePostPopUp, toggleShowMode, deletePost, selectPost } from '../../actions';

import './PostToolBar.css';


class PostToolBar extends React.Component {
	render() {
		return (
            <div className='post-tool-bar'>
				<button onClick={this.props.toggleCreatePostPopUp}>Create Post</button>
				<div className='tool-bar-spacer'/>
				<button onClick={() => {
					this.props.selectedPosts.forEach(key => {
						this.props.deletePost(key);
					});
				}}>Delete Selected</button>
				<div className='tool-bar-spacer'/>
				<button onClick={() => {
					let showPostsList = this.props.posts;
					if (!this.props.viewType) {
						showPostsList = showPostsList.filter(post => post.stared);
					}
					showPostsList.forEach(post => {
						this.props.selectPost(post.key)
					});
				}}>Select All</button>
				<div className='tool-bar-spacer'/>
				<button onClick={this.props.toggleShowMode}>{`Show: ${this.props.viewType ? 'All' : 'Stared'}`}</button>
			</div>
        );
	}
}

const mapStateToProps = (state) => {
    return {
		createPostPopUpOpen: state.createPostPopUpOpen,
		selectedPosts: state.selectedPosts,
		posts: state.posts,
		viewType: state.viewType,
	};
}    

export default connect(mapStateToProps, { toggleCreatePostPopUp, selectPost, deletePost, toggleShowMode })(PostToolBar);