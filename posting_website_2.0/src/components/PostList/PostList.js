import React from 'react';
import { connect } from 'react-redux';
import { deletePost, starPost, togglePostDetailPopUp } from '../../actions';
import PostItem from '../PostItem/PostItem';


class PostList extends React.Component {
	render() {      
        let showPostsList = this.props.posts;
        if (this.props.viewType === 'STARED') {
            showPostsList = showPostsList.filter(post => post.stared);
        }
		return (
            <ul className="posting-list">
 			    {showPostsList.map(post => (
                     <PostItem 
                        key={post.key} 
                        text={post.subject} 
                        starPost={() => this.props.starPost(post.key)} 
                        starStatus={post.stared ? 'Stared' : 'Star'} 
                        showDetail={() => this.props.togglePostDetailPopUp(post.key)} 
                        deletePost={() => this.props.deletePost(post.key)} 
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
    };
}    

export default connect(mapStateToProps, { deletePost, starPost, togglePostDetailPopUp })(PostList);