import React from 'react';
import { connect } from 'react-redux';
import { toggleCreatePostPopUp, toggleStaredView, deleteAllPosts } from '../../actions';

import './PostToolBar.css';


class PostToolBar extends React.Component {
	render() {
		return (
            <div className='posting-tool-bar'>
				<button onClick={this.props.toggleCreatePostPopUp}>Create New Post</button>
				<button onClick={this.props.toggleStaredView}>Show Stared</button>
				<button onClick={this.props.deleteAllPosts}>Delete All</button>
			</div>
        );
	}
}

const mapStateToProps = (state) => {
    return { createPostPopUpOpen: state.createPostPopUpOpen, };
}    

export default connect(mapStateToProps, { toggleCreatePostPopUp, toggleStaredView, deleteAllPosts })(PostToolBar);