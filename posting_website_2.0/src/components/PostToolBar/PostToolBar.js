import React from 'react';
import { connect } from 'react-redux';
import { toggleCreatePostPopUp, toggleShowMode, deletePost, selectPost } from '../../actions';
import { Paper, Hidden, Button } from '@material-ui/core'

import './PostToolBar.css';


class PostToolBar extends React.Component {
	render() {
		return (
			// <Hidden smDown>
					<Paper className='post-tool-bar'>
						<div className='tool-bar-spacer'/>
						<div className='toolbar-btn'>
							<Button variant="contained" onClick={this.props.toggleCreatePostPopUp}>Create Post</Button>
						</div>
						<div className='tool-bar-spacer'/>
						<div className='toolbar-btn'> 
							<Button variant="contained" onClick={() => {
								this.props.selectedPosts.forEach(key => {
									this.props.deletePost(key);
								});
							}}>Delete Selected</Button>
						</div>
						{/* <div className='tool-bar-spacer'/> */}
						{/* <div className='toolbar-btn'>
							<Button variant="contained" onClick={() => {
								let showPostsList = this.props.posts;
								if (!this.props.viewType) {
									showPostsList = showPostsList.filter(post => post.stared);
								}
								showPostsList.forEach(post => {
									this.props.selectPost(post.key)
								});
							}}>Select All</Button>
						</div> */}
						<div className='tool-bar-spacer'/>
						<div className='toolbar-btn'>
							<Button variant="contained" onClick={this.props.toggleShowMode}>{`Show: ${this.props.viewType ? 'All' : 'Stared'}`}</Button>
						</div>
						<div className='tool-bar-spacer'/>
					</Paper>
			// {/* </Hidden> */}
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