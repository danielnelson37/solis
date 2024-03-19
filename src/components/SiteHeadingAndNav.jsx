import { NavLink } from "react-router-dom";

export default function SiteHeadingAndNav() {

  return (
    <header>
      <nav>
        <a id='logo' href='/solis/'>SOLISPHERE</a>
        <div className="right">
        <button className="dropdown-btn">Menu</button>
          <ul className="main-menu">
            <li><NavLink to='/solis/'>Home</NavLink></li>
            <li><NavLink to='/solis/about'>About</NavLink></li>
            <li><NavLink to='/solis/gallery'>Gallery</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );

}
