import React from 'react';
import { connect } from 'react-redux';
import { toggleCreatePostPopUp, createPost, changePostSubject, changePostContent } from '../../actions';
import Container from '../Container/Container';


class AboutPage extends React.Component {
	render() {
		return (
            <Container
                body = {
                    <div> Hello, this is about page placeholder</div>
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

export default connect(mapStateToProps, { toggleCreatePostPopUp, createPost, changePostSubject, changePostContent })(AboutPage);