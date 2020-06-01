import React from 'react';
import { connect } from 'react-redux';
import { changePostSubject, changePostContent } from '../../actions';

import './TextInputArea.css';


class TextInputArea extends React.Component {
	render() {
		return (
            <div className='text-input'>
                <div>
                    <label>
                        Subject:
                        <input type="text" onChange={(e) => this.props.changePostSubject(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Post Content:
                        <br />
                        <textarea type="text" onChange={(e) => this.props.changePostContent(e.target.value)} />
                    </label>
                </div>
            </div>
        );
	}
}

const mapStateToProps = (state) => {
    return {
        postSubject: state.postSubject,
	    postContent: state.postSubject,
    };
}    

export default connect(mapStateToProps, { changePostSubject, changePostContent })(TextInputArea);