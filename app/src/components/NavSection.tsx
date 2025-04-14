import { NavLink } from 'react-router-dom';

type ComponentProps = {
  title: string
  link: string
  children: React.ReactNode
}

const NavSection = (Props : ComponentProps) => {
  return (
    <div className="p-4 border-b border-i-border-color hover:bg-i-hover-color">
      <NavLink to={Props.link}>
        <h2>{Props.title}</h2>
        <ul className="list-disc pl-4">{Props.children}</ul>
      </NavLink>
    </div>
  )
}

export default NavSection;
