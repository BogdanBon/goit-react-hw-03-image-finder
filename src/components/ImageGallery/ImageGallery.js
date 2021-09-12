import { Component } from "react";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  // ---------- render ----------
  render() {
    return <ul className={s.ImageGallery}>{this.props.children}</ul>;
  }
}
// ---------- propTypes options ----------
ImageGallery.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ImageGallery;
