
function Carrito({ carrito, eliminarDelCarrito }) {
  const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

  return (
    <section id="carrito" className="container py-5">
      <h2 className="mb-4">Carrito de compras</h2>

      {carrito.length === 0 ? (
        <p className="alert alert-secondary">Tu carrito está vacío.</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div
              className="d-flex align-items-center justify-content-between gap-3 border rounded p-3 mb-3"
              key={producto.id}
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="imagen-carrito"
                />
                <div>
                  <h3 className="fs-6 mb-1">{producto.nombre}</h3>
                  <strong>${producto.precio.toLocaleString("es-CL")}</strong>
                </div>
              </div>

              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => eliminarDelCarrito(producto.id)}
              >
                Eliminar
              </button>
            </div>
          ))}

          <h3 className="text-end fs-4">
            Total: ${total.toLocaleString("es-CL")}
          </h3>
        </>
      )}
    </section>
  );
}

export default Carrito;
