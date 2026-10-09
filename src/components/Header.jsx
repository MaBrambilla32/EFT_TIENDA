
function Header({ cantidadCarrito }) {
  return (
    <>
      <header className="text-center py-5 bg-dark text-white">
        <div className="container">
          <h1 className="fw-bold">GameZone</h1>
          <p className="mb-0">
            Tu tienda de videojuegos, consolas y accesorios
          </p>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#inicio">
            GameZone
          </a>

          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#productos">
              Productos
            </a>
            <a className="nav-link" href="#carrito">
              Carrito ({cantidadCarrito})
            </a>
            <a className="nav-link" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
