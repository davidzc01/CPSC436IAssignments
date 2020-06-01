import React from 'react';
import { connect } from 'react-redux';
import TextInputArea from '../TextInputArea/TextInputArea';
import { toggleCreatePostPopUp, addPost } from '../../actions';

import './CreatePostPopUp.css';


class CreatePostPopUp extends React.Component {
	render() {
        if(!this.props.createPostPopUpOpen) {
            return null;
        }
        const showHideClassName = this.props.createPostPopUpOpen ? "popup display-block" : "popup display-none";
		return (
            <div className={showHideClassName}>
                <div className='popup-main'>
                    <div className='popup-header'>
                        <div className='popup-title'> New Post </div>
                        <div className='popup-header-spacer'/>
                        <button className='close-popup' onClick={this.props.toggleCreatePostPopUp}>X</button>
                    </div>
                    <div className='create-post-text-input'>
                        <TextInputArea />
                    </div>
                    <div className='popup-footer'>
                        <div className='popup-header-spacer'/>
                        <button onClick={() => this.props.addPost({ subject:this.props.postSubject, content:this.props.postContent })}>Submit</button>
                    </div>
                </div>
			</div>
        );
	}
}

const mapStateToProps = (state) => {
    return {
        createPostPopUpOpen: state.createPostPopUpOpen,
        postSubject: state.postSubject,
	    postContent: state.postContent,
    };
}    

export default connect(mapStateToProps, { toggleCreatePostPopUp, addPost })(CreatePostPopUp);