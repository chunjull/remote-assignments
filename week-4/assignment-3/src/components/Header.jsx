import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const Link = props => <a {...props}>Star Explorer</a>;
  const [navActive, setNavActive] = useState(false);
  const showNavBar = () => {
    setNavActive(!navActive);
  }

  return (
    <div className="header-bg">
      <div className="container">
        <header className="header">
          <h1><Link href="/index.html"></Link></h1>
          <nav className={`navbar ${navActive ? "active" : ""}`}>
            <button className="navBtn closeBtn" onClick={showNavBar}><FaTimes/></button>
            <ul className="menu">
              <li><button>About</button></li>
              <li><button>Plan</button></li>
              <li><button>Pricing</button></li>
              <li><button>FAQ</button></li>
            </ul>
          </nav>
          <button className="navBtn" onClick={showNavBar}>
            <FaBars />
          </button>
        </header>
      </div>
    </div>
  )
}

export default Header;