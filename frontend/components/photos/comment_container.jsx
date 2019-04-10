import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { receiveComment, removeComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    receiveComment: comment => dispatch(receiveComment(comment)),
    deleteComment: id => dispatch(removeComment(id)),
    commentAppear: () => document.getElementById('comment-body').classList.toggle('show')
  };
};


class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }
  handleBody(e){
    this.setState({body: e.currentTarget.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    debugger
    const photoId = this.props.match.params.photoId;
    const comment = merge({}, this.state, {body: this.state.body, photo_id: photoId, commenter_id: this.props.currentUser.id});
    this.props.receiveComment(comment).then(this.setState({body: ''}));
  }
  stopEnter(e) {
    e.preventDefault();
  }
  render(){
    return (
      <React.Fragment>
        <form onSubmit={this.stopEnter.bind(this)} className="comment-form">
          <textarea cols="50" rows="8" value={this.state.body} onChange={this.handleBody} placeholder="Add a comment" className="comment-body">
          </textarea>
        </form>
        <button className="invis-button" onClick={this.handleSubmit}>Comment</button>
      </React.Fragment>
    );
  }
}


export default withRouter(connect(msp, mdp)(Comment));