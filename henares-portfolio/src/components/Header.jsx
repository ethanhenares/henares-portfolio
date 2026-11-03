import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Lialc</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
