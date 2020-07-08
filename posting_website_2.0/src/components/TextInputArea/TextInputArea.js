import React from 'react';
import { connect } from 'react-redux';
import { changePostSubject, changePostContent } from '../../actions';

class TextInputArea extends React.Component {
	render() {
		return (
            <div className='text-input'>
                <div>
                    <label>
                        Subject:
                        <input
                            id="subject-input"
                            type="text"
                            placeholder="Subject"
                            defaultValue={this.props.defaultSubject}
                            onChange={(e) => this.props.changePostSubject(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Post Content:
                        <br />
                        <textarea
                            id="content-input"
                            type="text"
                            placeholder="Content"
                            defaultValue={this.props.defaultContent}
                            onChange={(e) => this.props.changePostContent(e.target.value)}
                        />
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