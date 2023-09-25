import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  

  return (
    <navbar className ="nav-container">
        <Link className="icon" to="/">Front Beginners</Link>
        <ul>
        <CustomLink to="/about">Sobre</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        </ul>
    </navbar>
  )
}

function CustomLink({ to, children, ... props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({path: resolvePath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
    <Link to={to} {...props}>
      {children}
    </Link>
</li>
  )
}