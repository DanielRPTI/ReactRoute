

export default function Navbar() {
  return (
    <navbar className ="nav-container">
        <a className="icon" href="/">Front Beginners</a>
        <ul>
            <li className="active">
                <a href="/about">About</a>
            </li>
           <li>
                <a href="/profile">Profile</a>
           </li> 
        </ul>
    </navbar>
  )
}
