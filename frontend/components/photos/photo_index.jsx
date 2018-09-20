import React from 'react';
import PhotoIndexItem from './photo_index_item';
import { Link } from 'react-router-dom';

class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.receiveAllPhotos();
  }
  render() {
    const photos = this.props.photos.map(photo => {
      return <PhotoIndexItem key={photo.id} currentUser={this.props.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>;
    });
    return (
      <div className="photo-div">
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default PhotoIndex;


/*<Link to={`/photos/${this.props.currentUser.display_name}/edit`}>Edit</Link>*/