function Header() {
  return (
    <header className="header">
      <a className="logo" href="#home">
        EV MOTORS
      </a>

      <nav className="navigation" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#vehicles">Vehicles</a>
        <a href="#technology">Technology</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
