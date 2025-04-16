import { NavLink } from 'react-router-dom';
import NavSection from './NavSection';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">
        <h1 className="p-4  text-i-primary border-b border-i-border-color">
          Tailwind Testing
        </h1>
      </NavLink>

      <NavSection title="Colors" link="/colors">
        <li>Text color</li>
        <li>Background color</li>
        <li>Border color</li>
        <li>Button outline color</li>
      </NavSection>

      <NavSection title="Spacing" link="/spacing">
        <li>Margin</li>
        <li>Padding</li>
      </NavSection>

      <NavSection title="Typography" link="/typography">
        <li>Font Size</li>
        <li>Text Alignment</li>
        <li>Text Transform</li>
      </NavSection>

      <NavSection title="Width & Height" link="/sizing">
        <li>Width of the viewport</li>
        <li>100% of container</li>
        <li>Full screen height</li>
        <li>Arbitrary Width & Height</li>
      </NavSection>

      <NavSection title="Position, Display, Zindex" link="/position">
        <li>Position</li>
        <li>Display</li>
        <li>Z-index</li>
      </NavSection>

      <NavSection title="Drop Shadow" link="/dropshadow">
      </NavSection>
    </div>
  )
};

export default Navbar;
