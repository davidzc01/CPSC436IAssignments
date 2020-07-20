import React from 'react';
import { connect } from 'react-redux';
import { deletePost, updatePost, selectPost, toggleEditPostPopUp } from '../../actions';
import PostItem from '../PostItem/PostItem';
import { Paper } from '@material-ui/core'
import './PostList.css';


class PostList extends React.Component {
	render() {      
        let showPostsList = this.props.posts;
        if (!this.props.viewType) {
            showPostsList = showPostsList.filter(post => post.stared);
        }
		return (
            <Paper className="post-list-container">
                <div className="post-list">
                    {showPostsList.map(post => (
                        <PostItem 
                            key={post.key}
                            onSelect={() => this.props.selectPost(post.key)}
                            // selectStatus={post.selected} 
                            post={post}
                            onStar={() => this.props.updatePost(post.key,
                                {subject: post.subject, content: post.content, stared: !post.stared})} 
                            starStatus={post.stared } 
                            onEdit={() => this.props.toggleEditPostPopUp(post.key)}
                            onDelete={() => this.props.deletePost(post.key)} 
                        />
                    ))}
                </div>
            </Paper>
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

export default connect(mapStateToProps, { deletePost, updatePost, selectPost, toggleEditPostPopUp })(PostList);