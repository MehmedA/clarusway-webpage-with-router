import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex flex-col sm:flex-row text-center gap-3 justify-between items-center p-8 bg-gray-600 border-b-4 border-purple-500">
      <div>
        <h1 className="text-purple-500 text-2xl font-bold">
          Clarusway Web Design
        </h1>
      </div>
      <nav>
        <ul className="flex gap-3 text-white">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/services">SERVICES</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;