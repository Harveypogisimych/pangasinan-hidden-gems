export default function SiteHeader() {
  return (
    <header className="site-header">
      <a href="/pangasinan-hidden-gems/" className="brand">
        <span className="brand-symbol">P.</span>

        <span>
          <strong>HIDDEN GEMS</strong>
          <small>PANGASINAN TOURISM</small>
        </span>
      </a>

      <nav className="navigation" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="#destinations">Destinations</a>
        <a href="#about">About</a>
      </nav>

      <a href="#destinations" className="header-button">
        Explore More ↗
      </a>
    </header>
  );
}