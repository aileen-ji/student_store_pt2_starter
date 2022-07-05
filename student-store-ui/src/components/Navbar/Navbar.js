import { Link } from "react-router-dom"
import logo from "../../assets/codepath.svg"
import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"
import Facebook from "../Icons/Facebook"
import "./Navbar.css"

export default function Navbar(props) {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="codepath logo" />
          </Link>
        </div>

        <div className="socials">
          <Twitter fill="var(--pure-white)" />
          <Instagram fill="var(--pure-white)" />
          <Facebook fill="var(--pure-white)" />
        </div>

        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#About">About Us</Link>
          </li>
          <li>
            <Link to="/#Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/#Buy">Buy Now</Link>
          </li>
          {props.user?.email ? 
          (<li onClick={props.handleLogout}><Link to="/" className="nav-btn">Logout</Link></li>) : 
          (
            <>
            <li><Link to="/login" label="Login">Login</Link></li>
            <li ><Link to="/signup" label="Sign Up" className="nav-btn">Sign Up</Link></li>
            </>
        )}      
        <li><Link to="/me" label="My Account">My Account</Link></li>
        </ul>
      </div>
    </nav>
  )
}
