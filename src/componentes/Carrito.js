
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const Carrito=(props)=>{

    const {productos_tienda}=props;

    const navigate = useNavigate();

    const terminarCompra = () => {

        if(productos_tienda.length>=0)
        {
            Swal.fire(
                'Carrito Vacio',
                'Tu Carrito esta vacio, ingresa al menos 1 producto',
                'warning'
              )

        }else{
            Swal.fire({
                title: 'Seguro que deseas terminar de comprar?',
                text: "Ya no podras seguir agregando productos al carrito",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, pagar'
              }).then((result) => {
    
                if (result.isConfirmed) {
    
                  Swal.fire(
                    'Compra pagada correctamente',
                    'Muchas gracias por tu preferencia',
                    'success'
                  ).then((result) => {
                    
                    if (result.isConfirmed) {
                        navigate('/comprobante',{ state: {productos_tienda:productos_tienda} });
                    }
    
                  })
                }
              })
        }

        

        
    } 

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

                   
                    <button   onClick={terminarCompra} className="btn btn-success w-100" state={{productos_tienda:productos_tienda}}>    
                        Ir a Pagar
                    </button>
                            

                </div>

            </div>

        </div>

    )
    
}