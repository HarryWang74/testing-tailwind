import { NavLink } from 'react-router-dom';

type ComponentProps = {
  title: string
  link: string
  children: React.ReactNode
}

const NavSection = (Props : ComponentProps) => {
  return (
    <NavLink
      to={Props.link}
      className={({ isActive }) =>
        (isActive ? 'bg-i-hover-color' : '') + ' block hover:bg-i-hover-color'
      }
    >
      <div className="p-4 border-b border-i-border-color">
        <h2>{Props.title}</h2>
        <ul className="list-disc pl-4">{Props.children}</ul>
      </div>
    </NavLink>
  )
}

export default NavSection;
