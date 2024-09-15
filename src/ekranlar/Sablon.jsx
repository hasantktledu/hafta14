import { Link, Outlet } from "react-router-dom";

export function Sablon() {
  return (
    <>
      <header className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                Ana Ekran
              </Link>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
              <Link className="nav-link" to="/iletisim">
                İletişim
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="container py-3">
        <Outlet />
      </section>

      <footer className="container">Footer alanı</footer>
    </>
  );
}
