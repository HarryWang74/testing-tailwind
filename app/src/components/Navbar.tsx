import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">
        <h1 className="p-4  text-i-primary border-b border-i-border-color">
          Tailwind Testing
        </h1>
      </NavLink>
      <div className="p-4 border-b border-i-border-color hover:bg-i-hover-color">
        <NavLink to="/colors">
          <h2>Colors</h2>
          <ul className="list-disc pl-4">
            <li>Text color</li>
            <li>Background color</li>
            <li>Border color</li>
            <li>Button outline color</li>
          </ul>
        </NavLink>
      </div>
    </div>
  )
};

export default Navbar;
