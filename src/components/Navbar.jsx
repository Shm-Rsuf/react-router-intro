import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "orangered" : null,
    };
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>React Router</span>
      </div>
      <div className="links">
        <NavLink style={navActiveStyle} end to={"/"}>
          Home
        </NavLink>
        <NavLink style={navActiveStyle} end to={"/theater"}>
          Theater
        </NavLink>
        <NavLink style={navActiveStyle} to={"/about"}>
          About
        </NavLink>
        <NavLink style={navActiveStyle} to={"/contact"}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
