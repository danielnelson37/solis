import { NavLink } from "react-router-dom";

export default function SiteHeadingAndNav() {

  return (
    <header>
      <nav>
        <a id='logo' href='/'>SOLISPHERE</a>
        <div className="right">
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );

}
