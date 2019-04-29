// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import { receiveComments, receiveComment, removeComment } from '../../actions/comment_actions';
// import Comment from './comment_container';
// import { getComments } from '../../reducers/selectors';
// import React from 'react';

// const msp = (state, ownProps) => {
//   return {
//     currentUser: state.session.currentUser,
//     comments: Object.values(state.entities.comments),
//     errors: state.errors.comments
//   };
// };

// const mdp = dispatch => {
//   return {
//     fetchComments: id => dispatch(receiveComments(id)),
//     createComment: comment => dispatch(receiveComment(comment)),
//     deleteComment: id => dispatch(removeComment(id)),
//   };
// };

// class CommentList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       toggle: false,
//     };
//     this.toggle = this.toggle.bind(this);
//   }
//   componentDidMount(){
//     this.props.fetchComments(this.props.photoId);
//     if (this.props.currentUser) {
//       this.setState({currentUser: true});
//     } else {
//       this.setState({currentUser: false});
//     }
//   }
//   toggle() {
//     this.setState({toggle: !this.state.toggle});
//   }
//   deleteComment() {
//     this.props.deleteComment();
//   }
//   render() {
//     const { comments } = this.props;
    
//     return (
//       <div>
//         <ul>
//           { comments.map(comment => (
//             <CommentListItem 
//             key={comment.id}
//             comment={comment}
//             currentUserId={this.props.currentUserId}
//             deleteComment={this.props.deleteComment}
//             />
//           ))}
//         </ul>
//         <Comment 
//         createComment={this.props.createComment}
//         photoId={this.props.photoId}  
//         />
//       </div>
//     );
//   }
// }

// export default withRouter(connect(msp, mdp)(CommentList));
// const { deleteComment, fetchComments } = this.props;
// const commentListItem = this.props.comments.map(comment => {
//   return (
//     <CommentListItem key={comment.id} currentUser={this.props.currentUser} comment={comment} fetchComments={this.props.fetchComments} />
//   );
// });
// return (
//   <React.Fragment>
//     <div className="comment-list">
//       <ul>
//         {commentListItem}
//       </ul>
//     </div>
//   </React.Fragment>
// );