
function ProductoCard({ producto, agregarAlCarrito, estaEnCarrito }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <article className="card h-100 shadow-sm">
        <img
          src={producto.imagen}
          className="card-img-top imagen-producto"
          alt={producto.nombre}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-primary align-self-start mb-2">
            {producto.categoria}
          </span>

          <h3 className="card-title fs-5">{producto.nombre}</h3>

          <p className="card-text">{producto.descripcion}</p>

          <strong className="fs-5 mb-3 mt-auto">
            ${producto.precio.toLocaleString("es-CL")}
          </strong>

          <button
            className="btn btn-primary w-100"
            onClick={() => agregarAlCarrito(producto)}
            disabled={estaEnCarrito}
          >
            {estaEnCarrito ? "En el carrito" : "Agregar al carrito"}
          </button>
        </div>
      </article>
    </div>
  );
}

export default ProductoCard;
