import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

class Button extends Component {
  // ---------- change page +1 ----------
  submitClick = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      page: this.props.currentPage + 1,
      hits: 0,
    });
  };
  // ---------- render ----------
  render() {
    return (
      this.props.totalHits !== 0 && (
        <button type="submit" className={s.Button} onClick={this.submitClick}>
          Load more pics
        </button>
      )
    );
  }
}
// ---------- propTypes options ----------
Button.propTypes = {
  totalHits: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
};

export default Button;
