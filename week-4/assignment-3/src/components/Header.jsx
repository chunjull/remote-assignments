function Header() {
  const Link = props => <a {...props}>Star Explorer</a>;

  return (
    <div className="header-bg">
      <div className="container">
        <header className="header">
          <h1><Link href="/index.html"></Link></h1>
          <nav className="navbar">
            <ul className="menu">
              <li><button>About</button></li>
              <li><button>Plan</button></li>
              <li><button>Pricing</button></li>
              <li><button>FAQ</button></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Header;