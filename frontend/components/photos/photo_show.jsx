import React from 'react';
import { Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import MainNav from '../main_tools/main_nav_container';
import Footer from '../main_tools/footer';
import Comment from './comment_container';
import CommentList from './comment_list_container';
import Tag from './tag_container';
// import Slider from 'react-slick';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
    };
    this.currentUser = this.props.currentUser;
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount(){
    this.props.receivePhoto(parseInt(this.props.match.params.photoId));
  }
  updateTitle(e) {
    this.setState({title: e.currentTarget.value});
  }
  updateDescription(e) {
    this.setState({description: e.currentTarget.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePhoto(this.state);
    this.toggleEdit();
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePhoto(this.props.match.params.photoId);
    this.props.history.push(`/photos/~/${this.props.currentUser.display_name}`);
  }
  toggleEdit(){
    if (this.state.edit === false){
      this.setState({edit: true});
    } else {
      this.setState({edit: false});
    }
  }
  render(){
    if (this.state.edit === false){
      return (
        <React.Fragment>
          <MainNav />
          <div className="pic-container">
            <Link to={`/photos/~/${this.props.currentUser.display_name}`} className="back"><i className="fas fa-arrow-left"></i> Back to Photostream</Link>
            <div className="pads center">
              <img className='superfun-image'
              src= {
                `${this.props.photo.photoUrl}`
              }
              />
            </div>
          </div>
          <nav className="edit-btns">
            <i className="fas fa-trash edit-btn" onClick={this.handleDelete}></i>
          </nav>
          <div className="center-content">
            <div className="user-info">
              <img className="user-profile-photo-show"/>
              <br />
              <h1>{this.currentUser.fname} {this.currentUser.lname}</h1>
              <p className="description-para">
                <i className="fas fa-edit edit-btn" onClick={this.toggleEdit}></i>
                <span className="content-show">{this.props.photo.title}</span>
                <br />
                <span className="content-show">{this.props.photo.description}</span>
              </p>
            </div> 
            <div className="comments-container">
              {/* <CommentList />
              <Comment />
              <Tag /> */}
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MainNav />
          <div className="pic-container">
              <img className='superfun-image'
              src= {
                `${this.props.photo.photoUrl}`
              }
              />
          </div>
          <content>
            <div>
              <img className="avatar" src="https://s3.amazonaws.com/share-the-flare-dev/shareTheFlare.png" />
               <label><p>Title</p>
                  <input
                    className="edit-input"
                    type="text"
                    value={this.props.photo.title}
                    onChange={this.updateTitle} />
               </label>
               <label><p>Description</p>
                  <input
                    className="edit-input"
                    type="text"
                    value={this.props.photo.description}
                    onChange={this.updateDescription} />
               </label>
               <button className="edit-update" onClick={this.handleSubmit}>Update</button>
            </div>
          </content>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default PhotoShow;

{/* <div>
            <span>{this.props.comments.title}</span>
            <span>{this.props.comments.body}</span>
          </div> */}

          
