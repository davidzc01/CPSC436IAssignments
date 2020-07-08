import React from 'react';
import { connect } from 'react-redux';
import TextInputArea from '../TextInputArea/TextInputArea';
import { toggleEditPostPopUp, updatePost, changePostSubject, changePostContent } from '../../actions';
import PopUpWindow from '../PopUpWindow/PopUpWindow';

class EditPostPopUp extends React.Component {
	render() {
        const postToEdit = this.props.posts.find(elem => elem.key === this.props.editPostPopUpOpen.key);
        if(!this.props.editPostPopUpOpen.show) {
            return null;
        }
        const showHideClassName = this.props.editPostPopUpOpen.show ? "popup display-block" : "popup display-none";
		return (
            <PopUpWindow
                clasName = {showHideClassName}
                popUpTitle = {'Editing Post...'}
                toggleAction = {this.props.toggleEditPostPopUp}
                popUpBody = {
                    <div className='create-post-text-input'>
                        <TextInputArea
                            defaultSubject={postToEdit.subject}
                            defaultContent={postToEdit.content}
                        />
                    </div>
                }
                popUpFooter = {
                    <button onClick={() => {
                        this.props.updatePost(postToEdit.key, {subject: this.props.postSubject || postToEdit.subject, content: this.props.postContent || postToEdit.content, stared: postToEdit.stared})
                        this.props.toggleEditPostPopUp('')
                        }}>
                        Save
                    </button>
                }
            />
        );
	}
}

const mapStateToProps = (state) => {
    return {
        editPostPopUpOpen: state.editPostPopUpOpen,
        postSubject: state.postSubject,
        postContent: state.postContent,
        posts: state.posts,
    };
}    

export default connect(mapStateToProps, { toggleEditPostPopUp, updatePost, changePostSubject, changePostContent })(EditPostPopUp);