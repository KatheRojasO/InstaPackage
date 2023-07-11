import React, { useState } from "react";
import i18n from "../scripts/i18n";
import ukflag from "../assets/flags/uk.svg";
import data from "../data/dropdown-btn.json";

/**
 * 1. imports
 * 2. global state
 * 3. local state
 * 4. properties
 * 5. methods
 * 6. JSX (return)
 */

export default function NavBar() {
  const [language, setLanguage] = useState("en");
  const [iconFlag, setIconFlag] = useState(ukflag);

  function changeLanguage(e, inputLanguage, flag) {
    e.preventDefault();
    setLanguage(inputLanguage);
    setIconFlag(flag);
    i18n.changeLanguage(inputLanguage);
  }

  const dropdownItems = data.map((item) => (
    <button
      key={item.id}
      className="dropdown-btn"
      onClick={(e) => changeLanguage(e, item.language, item.flag)}
    >
      <span>{item.language.toUpperCase()}</span>
      <img src={item.flag} alt="language-flags" className="dropdown-flags" />
    </button>
  ));

  return (
    <nav className="navigation-bar">
      <h1>InstaPackage</h1>
      <div className="dropdown">
        <button className="main-btn">
          <span>{language}</span>
          <img src={iconFlag} alt="language-flag" className="dropdown-flags" />
        </button>
        <div className="dropdown-content">{dropdownItems}</div>
      </div>
    </nav>
  );
}
