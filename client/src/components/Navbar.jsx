import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="store-navbar navbar-dark bg-dark">
      <div className="navbar-inner">
        <a href="/" className="store-logo">
          FESTIVE / STORE
        </a>

        <div className="nav-links">
          <a href="#products">Shop All</a>
          <a href="#categories">Diwali Lights</a>
          <a href="#categories">Decor & Diyas</a>
          <a href="#collection">Celebration Items</a>
        </div>

        <div className="navbar-actions">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              aria-label="Search products"
            />
          </div>

          <button className="icon-btn" aria-label="Account">
            <i className="bi bi-person"></i>
          </button>

          <button className="icon-btn" aria-label="Shopping bag">
            <i className="bi bi-bag"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}