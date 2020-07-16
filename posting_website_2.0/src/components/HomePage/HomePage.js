import React from 'react';
import { connect } from 'react-redux';
import PostToolBar from '../PostToolBar/PostToolBar';
import CreatePostPopUp from '../CreatePostPopUp/CreatePostPopUp';
import PostDetailPopUp from '../PostDetailPopUp/PostDetailPopUp';
import EditPostPopUp from '../EditPostPopUp/EditPostPopUp';
import PostList from '../PostList/PostList';
import Container from '../Container/Container';

import './HomePage.css';


class HomePage extends React.Component {
	render() {
		return (
			<Container
				body = {
					<div className='post-app-frame'>
						<PostToolBar />
						<PostList />
						<CreatePostPopUp />
						<PostDetailPopUp />
						<EditPostPopUp />
					</div>
				}
			/>
        );
	}
}

const mapStateToProps = (state) => {
    return { postings: state.postings };
}    

export default connect(mapStateToProps)(HomePage);