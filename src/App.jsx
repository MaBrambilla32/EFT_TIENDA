
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductoCard from "./components/ProductoCard";
import Carrito from "./components/Carrito";
import FormularioContacto from "./components/FormularioContacto";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [categoria, setCategoria] = useState("Todas");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch(
          `${import.meta.env.BASE_URL}productos.json`
        );

        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos.");
        }

        const datos = await respuesta.json();
        setProductos(datos);
      } catch (error) {
        setError("No se pudo cargar el catálogo. Intenta nuevamente.");
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((actual) =>
      actual.some((item) => item.id === producto.id)
        ? actual
        : [...actual, producto]
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((actual) =>
      actual.filter((producto) => producto.id !== id)
    );
  };

  const categorias = [
    "Todas",
    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  const productosFiltrados =
    categoria === "Todas"
      ? productos
      : productos.filter((producto) => producto.categoria === categoria);

  return (
    <div id="inicio" className="app">
      <Header cantidadCarrito={carrito.length} />

      <main>
        <section id="productos" className="container py-5">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <div>
              <h2 className="fw-bold">Nuestros productos</h2>
              <p className="text-secondary mb-0">
                Encuentra tu próximo juego favorito.
              </p>
            </div>

            <div>
              <label htmlFor="categoria" className="form-label">
                Filtrar por categoría
              </label>
              <select
                id="categoria"
                className="form-select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                {categorias.map((nombre) => (
                  <option key={nombre} value={nombre}>
                    {nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {cargando && (
            <p className="alert alert-info">Cargando productos...</p>
          )}

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {!cargando && !error && productosFiltrados.length === 0 && (
            <p className="alert alert-secondary">
              No hay productos en esta categoría.
            </p>
          )}

          {!cargando && !error && (
            <div className="row g-4">
              {productosFiltrados.map((producto) => (
                <ProductoCard
                  key={producto.id}
                  producto={producto}
                  agregarAlCarrito={agregarAlCarrito}
                  estaEnCarrito={carrito.some(
                    (item) => item.id === producto.id
                  )}
                />
              ))}
            </div>
          )}
        </section>

        <Carrito
          carrito={carrito}
          eliminarDelCarrito={eliminarDelCarrito}
        />

        <FormularioContacto />
      </main>

      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-1">GameZone - Tienda de videojuegos</p>
        <p className="mb-0">Santiago, Chile</p>
      </footer>
    </div>
  );
}

export default App;
