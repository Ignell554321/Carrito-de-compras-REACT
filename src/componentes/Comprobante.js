import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Comprobante=()=>{


    const location = useLocation();
    const { state } = location;
    console.log(state);
    const {productos_tienda} =state;

    useEffect(()=>{

        let subtotal=0;
         productos_tienda.map(p=>{
            subtotal+=Number(p.cantidad*p.precio);
        })
        document.getElementById('txtTotalCompra').value=subtotal;
        console.log(subtotal);

    },[]);

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
                        <input value="MIGUEL ANGEL GUEVARA ALEJANDRO" className="form-control form-control-sm" disabled/>
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
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Subtotal</th>
                                </tr>

                            </thead>

                            <tbody>

                            {
                                productos_tienda.map(({nombre,cantidad,imagen,precio,subtotal},index)=>(

                                    <tr key={index}>
                                        <td><img src={imagen} alt="imagen_producto" className="img img-fluid" width={80}/></td>
                                        <td>{nombre}</td>
                                        <td>{cantidad}</td>
                                        <td>{precio}</td>
                                        <td>{subtotal}</td>
                                    </tr>
                                ))
                            }
                                
                            </tbody>
                        </table>

                    </div>

                    <div className="d-flex justify-content-end">

                        <div className="form-group">
                            
                            <label>Total Compra:</label>
                            <input id="txtTotalCompra" className="form-control form-control-sm "/>

                        </div>

                    </div>

                </div>


            </div>

        </div>

    )
}