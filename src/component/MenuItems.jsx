import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";


const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseOver={()=>setDropdown(true)}
      onMouseOut={()=>setDropdown(false)}
    >
      {items.submenu ? (
        <>
          <div aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}>
            {items.title}{" "}
            {depthLevel > 0 ? ( <span> & raquo; </span>) : ( <span className="arrow" />)}{" "}
          </div>{" "}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />{" "}
        </>
      ) : (
        <a href="/#"> {items.title} </a>
      )}{" "}
    </li>
  );
};


export default MenuItems;