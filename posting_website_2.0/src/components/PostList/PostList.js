import React from 'react';
import { connect } from 'react-redux';
import { deletePost, updatePost, togglePostDetailPopUp, selectPost, toggleEditPostPopUp } from '../../actions';
import PostItem from '../PostItem/PostItem';
import './PostList.css';


class PostList extends React.Component {
	render() {      
        let showPostsList = this.props.posts;
        if (!this.props.viewType) {
            showPostsList = showPostsList.filter(post => post.stared);
        }
		return (
            <ul className="post-list">
 			    {showPostsList.map(post => (
                     <PostItem 
                        key={post.key}
                        onSelect={() => this.props.selectPost(post.key)} 
                        text={post.subject} 
                        onStar={() => this.props.updatePost(post.key,
                            {subject: post.subject, content: post.content, stared: !post.stared})} 
                        starStatus={post.stared ? 'Stared' : 'Star'} 
                        onView={() => this.props.togglePostDetailPopUp(post.key)}
                        onEdit={() => this.props.toggleEditPostPopUp(post.key)}
                        onDelete={() => this.props.deletePost(post.key)} 
                    />
                 ))}
 		    </ul>
        );
	}
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        viewType: state.viewType,
        selectedPosts: state.selectedPosts,
    };
}    

export default connect(mapStateToProps, { deletePost, updatePost, togglePostDetailPopUp, selectPost, toggleEditPostPopUp })(PostList);