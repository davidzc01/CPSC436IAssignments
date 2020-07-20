import React from 'react';
import { connect } from 'react-redux';
import { togglePostDetailPopUp, deletePost } from '../../actions';
import PopUpWindow from '../PopUpWindow/PopUpWindow';

class PostDetailPopUp extends React.Component {
	render() {
        const postToShow = this.props.posts.find(elem => elem.key === this.props.showPostDetailPopUp.key);
        if(!(this.props.showPostDetailPopUp.show && postToShow)) {
            return null;
        }
        const showHideClassName = this.props.showPostDetailPopUp.show ? "popup display-block" : "popup display-none";
		return (
            <PopUpWindow
                clasName = {showHideClassName}
                popUpTitle = {postToShow.subject}
                toggleAction = {this.props.togglePostDetailPopUp}
                popUpBody = {
                    <p>{postToShow.content}</p>
                }
                popUpFooter = {
                    <div>
                        <button onClick={() => {}}>
                            Edit
                        </button>
                        <button onClick={() => {
                            this.props.deletePost(postToShow.key);
                            this.props.togglePostDetailPopUp();
                        }}>
                            Delete
                        </button>
                    </div>
                }
            />
        );
	}
}

const mapStateToProps = (state) => {
    return {
        showPostDetailPopUp: state.showPostDetailPopUp,
        posts: state.posts,
    };
}    

export default connect(mapStateToProps, { togglePostDetailPopUp, deletePost })(PostDetailPopUp);