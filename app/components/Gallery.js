import React from 'react';
import '../styles/gallery.scss';

function imagesLoaded(images) {
  for (const image of images) {
    if (!image.complete) {
      return false;
    }
  }
  return true;
}

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  handleImageChange() {
    const images = this.refs.gallery.querySelectorAll('img')
    this.setState({
      loading: !imagesLoaded(images)
    });
  }

  handleLoading() {
    if (this.state.loading) {
      return <div className="loading"></div>;
    }
  }

  render() {
    return (
      <div className="gallery" ref="gallery">
        {this.props.imageUrls.map(imageUrl =>
          <img
            key={imageUrl.toString()}
            className="image"
            // src={require('../images/' + imageUrl)}
            src={imageUrl}
            onLoad={this.handleImageChange.bind(this)}
            onError={this.handleImageChange.bind(this)}
          />
        )}
        {this.handleLoading()}
      </div>
    );
  }
}

Gallery.defaultProps = {
  imageUrls: React.PropTypes.array.isRequired
};
