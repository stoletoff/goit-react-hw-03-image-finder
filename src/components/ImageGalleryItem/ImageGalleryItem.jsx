import { Component } from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  state = { showModal: false };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;
    <GalleryItem key={image.id}>
      <GalleryItemImg src={image.webformatURL} alt={image.tags} />
    </GalleryItem>;
  }
}
