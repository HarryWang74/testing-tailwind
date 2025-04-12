import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">
        <h1 className="p-4 border-b border-color">Tailwind Testing</h1>
      </NavLink>

      {/*     <h2 className="text-(--color-border)">h2</h2>
      <h3>h3</h3>
      <h4>h4</h4> */}
      <div className="p-4 border-b border-color">
        <NavLink to="/colors">
          <h2>Colors</h2>
          <ul className="list-disc pl-4">
            <li>Text color</li>
            <li>Background color</li>
            <li>Border color</li>
          </ul>
        </NavLink>
      </div>
    </div>
  )
};

export default Navbar;
