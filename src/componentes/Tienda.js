import { Productos } from "./Productos"
import { Carrito } from "./Carrito";
import { useState } from "react";
import {data} from '../data';

export const Tienda=()=>{

    const {productos,productosTienda}=data;

    const [productosT,setProductosT]=useState([]);

    const agregarProducto=(producto)=>{

        console.log(producto);
        setProductosT([...productosT,producto]);
    }

    return(

        <div className="container-fluid">

            <div className="row">

                <div className="col-md-6">

                    <p className="text-primary"> Lista de Productos</p>

                    <Productos listaProductos={productos} agregarProductosTienda={agregarProducto}/>

                </div>

                <div className="col-md-6">

                    <p className="text-primary"> Carrito de compras</p>

                    <Carrito productos_tienda={productosT} />

                </div>

            </div>

        </div>

    )
}