import React, { useEffect, useState } from "react";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { fonticon, getCategoryBySlug, getMainCategories } from "../../helpers/helpers";

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
        {fonticon(faCaretDown,"iconbdown")}
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
        
        {fonticon(faSearch,"iconsearch")}
      </a>
    </div>
  );
}
