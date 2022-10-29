import { Link, Route, Routes } from "react-router-dom";
import { Tienda } from "./Tienda";
import { Comprobante } from "./Comprobante";

const Navegador = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Tienda</Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>

            {/* rutas */}
            <Routes>
                <Route path="/" element={<Tienda/>} />
                <Route path="/comprobante" element={<Comprobante/>} />
                <Route path="*" element={<div><p className="lead fs-2 text-primary">Pagina no encontrada</p></div>} />
            </Routes>

        </div>

    )

}
export default Navegador;