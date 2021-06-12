import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { getCategoryBySlug, getMainCategories } from "../../helpers/helpers";

export default function SearchBar() {
  //states
  const [categorieslist, setcategorieslist] = useState([]);
  const [currentcategory, setcurrentcategory] = useState(getCategoryBySlug(""));

  //calbacks
  const onChangeCategory = (e) => {
    const value = e.target.value;
    setcurrentcategory(getCategoryBySlug(value));
  };

  useEffect(() => {
    setcategorieslist(getMainCategories());
    return () => {};
  }, []);

  return (
    <div id="header-searchbar">
      <div className="search-category-selector" onChange={onChangeCategory}>
        <span className="label">{currentcategory.displayname}</span>
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
