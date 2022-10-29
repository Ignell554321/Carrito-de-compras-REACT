export const Comprobante=()=>{

    return (

        <div className="container ">

            
            <div className="row">

                <div className="col-12">
                    <h3>Comprobante de Pago</h3>
                </div>

            </div>

            <div className="row">

                <div className="col-3">

                    <div className="form-group">

                        <label>Nombres y Apellidos</label>
                        <input  className="form-control form-control-sm" disabled/>
                    </div>

                </div>

                <div className="col-3">

                    <div className="form-group">

                        <label>Fecha de compra </label>
                        <input value={new Date().toLocaleString()}  className="form-control form-control-sm" disabled/>
                    </div>
                    
                </div>

                <div className="col-3">

                    <div className="form-group">

                        <label>Direccion</label>
                        <input type="text" value="MZ. T LOTE 20 URB. PRIMAVERA" className="form-control form-control-sm" disabled/>
                    </div>
                    
                </div>

                <div className="col-2">

                    <div className="form-group">

                        <label>Telefono</label>
                        <input  type="text" value="986733128" className="form-control form-control-sm" disabled/>
                    </div>
                    
                </div>

            </div>

            <hr/>

            <div className="row">

                <div className="container">

                    <div className="col-12">

                        <p className="fs-3">Tabla de productos</p>

                    </div>

                    <div className="col-12">

                        <table className="table table-sm table-striped">

                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Nombre</th>
                                    <th>Nombre</th>
                                    <th>Nombre</th>
                                    <th>Nombre</th>
                                </tr>

                            </thead>

                            <tbody>
                                <tr>

                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>


            </div>

        </div>

    )
}