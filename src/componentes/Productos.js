
import { useState } from "react";

export const Productos=(props)=>{


    const {agregarProductosTienda,listaProductos}=props;

    

    const [producto,setProducto]=useState({

        id:0, 
        nombre:'', 
        precio:0, 
        cantidad: 0, 
        subtotal:0, 
        imagen:''

    });
    
    const abrirDetalle=(producto)=>{

            const {id,nombre,precio,imagen}=producto;
            document.getElementById("txtNombre").innerHTML=nombre;
            document.getElementById("imgProductoDetalle").src=imagen;
            document.getElementById("txtPrecio").value=precio;
            document.getElementById("txtPrecioD").innerHTML=`Precio: ${precio}`;
            document.getElementById("txtId").value=id;

            setProducto({
                ...producto,
                id:id,
                nombre:nombre,
                precio:precio,
                imagen:imagen,
                cantidad:1,
                subtotal:1*precio
            });

            document.getElementById('txtCantidad').value=1;
            document.getElementById('txtSubtotal').value=1*precio;


    }

    const calcularSubtotal=(e)=>{

        console.log(e.target.value);

        let cantidad=e.target.value;
        let precio= Number(document.getElementById("txtPrecio").value);
        let subtotal= document.querySelector("#txtSubtotal").value=cantidad*precio;

        setProducto({
            ...producto,
            cantidad:cantidad,
            subtotal:subtotal
        });


    }

    const agregarProducto=()=>{

        agregarProductosTienda(producto);
    }

    return(

        <div className='row'>

            {
                listaProductos.map((producto)=>(

                    <div className="card col-4"  key={producto.id}>
                        <img src={producto.imagen} className="card-img-top"  alt="img"/>
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{abrirDetalle(producto)}}>Ver Detalle</button>
                        </div>
                    </div>

                ))
            }


        
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Detalle Producto <span id="txtNombre"></span> </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <div className='container d-flex justify-content-center'>

                            <div className='row'>

                                <div className='col-12 d-flex justify-content-center'>

                                    <img className='img img-fluid' src='' width={'150px'} id='imgProductoDetalle' alt="imagen"/>

                                </div>

                                <div className='col-12'>

                                    <input type="text" id="txtPrecio" className='visually-hidden' />
                                    <input type="text" id="txtId" className='visually-hidden' />
                                    

                                </div>

                                <div className='col-12 text-center'>
                                    <p className='fs-6 text-danger mt-2' id='txtPrecioD'></p>
                                </div>


                                <div className='d-flex justify-content-center'>

                                    <div className='form-group'>

                                        <label>Cantidad:</label>
                                        <input onChange={(e)=>{calcularSubtotal(e)}} id="txtCantidad" className='form-control form-control-sm' type="number" min="0"/>

                                    </div>

                                    <div className='form-group ms-2'>

                                        <label>Subtotal:</label>
                                        <input className='form-control form-control-sm' id="txtSubtotal" type="text" disabled min="0" />
                                    
                                    </div>

                                </div>


                            </div>

                        </div>

                        
                    </div>
                    <div className="modal-footer">

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={agregarProducto} data-bs-dismiss="modal" >Agregar</button>
                        
                    </div>

                </div>
            </div>
        </div>


                    
        </div>
    )



}