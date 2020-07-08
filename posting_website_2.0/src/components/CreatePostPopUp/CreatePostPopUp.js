import React from 'react';
import { connect } from 'react-redux';
import TextInputArea from '../TextInputArea/TextInputArea';
import { toggleCreatePostPopUp, createPost, changePostSubject, changePostContent } from '../../actions';
import PopUpWindow from '../PopUpWindow/PopUpWindow';

class CreatePostPopUp extends React.Component {
	render() {
        if(!this.props.createPostPopUpOpen) {
            return null;
        }
        const showHideClassName = this.props.createPostPopUpOpen ? "popup display-block" : "popup display-none";
		return (
            <PopUpWindow
                clasName = {showHideClassName}
                popUpTitle = {'Create Your New Post!'}
                toggleAction = {this.props.toggleCreatePostPopUp}
                popUpBody = {
                    <div className='create-post-text-input'>
                        <TextInputArea/>
                    </div>
                }
                popUpFooter = {
                    <button
                        onClick={
                            () => {
                                if(this.props.postSubject && this.props.postContent) {
                                    this.props.createPost({ subject:this.props.postSubject, content:this.props.postContent });
                                    this.props.toggleCreatePostPopUp();
                                }
                                alert('You Post is Empty!');
                            }
                        }
                    >
                        Submit
                    </button>
                }
            />
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

export default connect(mapStateToProps, { toggleCreatePostPopUp, createPost, changePostSubject, changePostContent })(CreatePostPopUp);