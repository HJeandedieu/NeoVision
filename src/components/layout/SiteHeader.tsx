export default function SiteHeader() {
  return (
    <header data-theme="light">
      <div className="container stack">
        <a href="#home">NeoVision</a>
        <nav aria-label="Main navigation">
          <a className="button button--ghost" href="#home">Home</a>
          <a className="button button--ghost" href="#about">About</a>
          <a className="button button--ghost" href="#services">Services</a>
          <a className="button button--ghost" href="#contact">Contact</a>
        </nav>
        {/* Add search and the mobile navigation menu here. */}
      </div>
    </header>
  );
}
