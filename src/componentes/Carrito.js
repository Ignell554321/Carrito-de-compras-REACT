
import {data} from '../data';

export const Carrito=(props)=>{

    const {productos_tienda}=props;

    console.log(productos_tienda);

    return(

        <div>

            <div className="table-responsive">


                <table className="table table-sm table-hover">

                    <thead>
                        <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            productos_tienda.map( ({id,nombre,imagen,cantidad,precio,subtotal},index)=>(
                               
                                <tr key={index}>
                                    <th scope="row">
                                        <img src={imagen} className="card-img-top" style={{width: '50px'}} alt="img"/>
                                    </th>
                                    <td scope="row">{nombre}</td>
                                    <td scope="row">{cantidad}</td>
                                    <td scope="row">{precio}</td>
                                    <td scope="row">{subtotal}</td>
                                    <td scope="row">
                                        <button className='btn btn-warning'>Editar</button>
                                    </td>
                                </tr>
                            
                            ))
                        }

                        
                    </tbody>

                </table>

            </div>

            <div className="row">

                <div className="col ">

                    <button className="btn btn-success w-100">Ir a Pagar</button>

                </div>

            </div>

        </div>

    )
    
}