
import { useState } from "react";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    setError("");
    setEnviado(false);

    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setError("Completa todos los campos.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    setEnviado(true);
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <section id="contacto" className="container py-5">
      <h2 className="mb-4">Contáctanos</h2>

      <form onSubmit={enviarFormulario} className="row g-3">
        <div className="col-12">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            id="mensaje"
            className="form-control"
            rows="4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>

        {error && <div className="col-12 alert alert-danger">{error}</div>}
        {enviado && (
          <div className="col-12 alert alert-success" role="status">
            Formulario validado correctamente. ¡Gracias por contactarnos!
          </div>
        )}

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Enviar mensaje
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormularioContacto;
