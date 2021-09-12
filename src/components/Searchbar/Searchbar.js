import { Component } from "react";
import Notiflix from "notiflix";
import PropTypes from "prop-types";

import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    image: "",
  };
  // ---------- getting Query from input ----------
  inputChange = (e) => {
    this.setState({ image: e.target.value });
  };
  // ---------- check Input empty or not ----------
  formChange = (e) => {
    e.preventDefault();

    this.state.image.trim() === ""
      ? Notiflix.Notify.info("Please write what you want to find")
      : this.props.onSubmit({ image: this.state.image, page: 1, hits: 0 });
  };
  // ---------- render ----------
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.formChange}>
          <button type="submit" className={s.SearchForm_Button}>
            <span className={s.SearchForm_Button_Label}>Search</span>
          </button>

          <input
            type="text"
            className={s.SearchForm_Input}
            placeholder="Search photos"
            value={this.state.image}
            onChange={this.inputChange}
          />
        </form>
      </header>
    );
  }
}
// ---------- propTypes options ----------
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
