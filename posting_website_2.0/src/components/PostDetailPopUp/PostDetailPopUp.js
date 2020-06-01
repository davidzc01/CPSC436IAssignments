import React from 'react';
import { connect } from 'react-redux';
import { togglePostDetailPopUp } from '../../actions';

class PostDetailPopUp extends React.Component {
	render() {
        const postToShow = this.props.posts.find(elem => elem.key === this.props.showPostDetailPopUp.key);
        if(!(this.props.showPostDetailPopUp.show && postToShow)) {
            return null;
        }
        const showHideClassName = this.props.showPostDetailPopUp.show ? "popup display-block" : "popup display-none";
		return (
            <div className={showHideClassName}>
                <div className='popup-main'>
                    <div className='popup-header'>
                        <div className='popup-title'> Your Post </div>
                        <div className='popup-header-spacer'/>
                        <button className='close-popup' onClick={this.props.togglePostDetailPopUp}>X</button>
                    </div>
                    <div className='create-post-text-input'>
                        <label>
                            Subject:
                            <h4>{postToShow.subject}</h4>
                        </label>
                        <label>
                            Post Content:
                            <p>{postToShow.content}</p>
                        </label>
                    </div>
                </div>
			</div>
        );
	}
}

const mapStateToProps = (state) => {
    return {
        showPostDetailPopUp: state.showPostDetailPopUp,
        posts: state.posts,
    };
}    

export default connect(mapStateToProps, { togglePostDetailPopUp })(PostDetailPopUp);