import React from "react";
import { LINKS } from "../../static";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-green-400">
      <nav className="flex items-center h-20 container justify-between">
        <Link to={"/"}>
          <div className="logo font-bold text-2xl">LOGOO</div>
        </Link>
        <ul className="flex gap-6 uppercase tracking-widest">
          {LINKS.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
