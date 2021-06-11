import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { getMainCategories } from "../../helpers/helpers";

export default function SearchBar() {
  //states
  const [categorieslist, setcategorieslist] = useState([]);

  //calbacks
  const onCategorySelector = (e) => {
    const value = e.target.value;

    alert(value);
  };

  useEffect(() => {
    setcategorieslist(getMainCategories());

    return () => {};
  }, []);

  return (
    <div id="header-searchbar">
      <div className="search-category-selector" onChange={onCategorySelector}>
        <span className="label">Tools and Home Improvement</span>
        <FontAwesomeIcon className="icondown" icon={faCaretDown} />

        <select className="categories_list">
          {categorieslist.map((item, index) => {
            return (
              <option value={item.slug} key={item.slug}>
                {item.displayname}
              </option>
            );
          })}
        </select>
      </div>

      <input type="text" />

      <a href="/" className="search-button">
        <FontAwesomeIcon className="iconsearch" icon={faSearch} />
      </a>
    </div>
  );
}
