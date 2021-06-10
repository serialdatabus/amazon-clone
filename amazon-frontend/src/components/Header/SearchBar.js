import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faCaretDown,
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  //calbacks
  const onCategorySelector = () => {
    alert(8888);
  };

  return (
    <div id="header-searchbar">
      <div class="search-category-selector" onClick={onCategorySelector}>
        <span class="label">Tools and Home Improvement</span>
        <FontAwesomeIcon className="icondown" icon={faCaretDown} />

        <select class="categories_list">
          <option>Cars and Motors</option>
          <option>Cars and Motors</option>
          <option>Cars and Motors</option>
          <option>Cars and Motors</option>
          <option>Cars and Motors</option>
          <option>Cars and Motors</option>
        </select>
      </div>

      <input type="text" />

      <a href="" class="search-button">
        <FontAwesomeIcon className="iconsearch" icon={faSearch} />
      </a>
    </div>
  );
}
