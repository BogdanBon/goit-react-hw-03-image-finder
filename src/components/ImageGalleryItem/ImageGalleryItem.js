import { Component } from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  // ---------- add link for Modal large image  ----------
  addImageSrc = (e) => {
    this.props.addImageSrc(e.target.dataset.src);
    this.props.showModal(true);
  };
  // ---------- render ----------
  render() {
    return (
      this.props.imageGallery.length !== 0 &&
      this.props.imageGallery.map((img) => (
        <li key={img.id} className={s.ImageGallery_Item}>
          <img
            src={img.webformatURL}
            alt={img.tags}
            data-src={img.largeImageURL}
            className={s.ImageGallery_Item_Image}
            onClick={this.addImageSrc}
          />
        </li>
      ))
    );
  }
}
// ---------- propTypes options ----------
ImageGalleryItem.propTypes = {
  imageGallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.func.isRequired,
  addImageSrc: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
