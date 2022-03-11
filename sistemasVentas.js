class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto} tiene el nombre de: ${this._nombre} con precio: $${this._precio}`
    }
} 

let producto1 = new Producto('Arroz', 34000);
let producto2 = new Producto("Camisa", 23000);


class Orden{

    static contadorOrdenes =0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados =0;
    }

   get idOrden(){
       return this._idOrden;
   }

   agregarProducto(producto){
       if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); 
       } else {
           console.log('No se pueden agregar mas productos');
       }
   }
   calcularTotal(){
       let totalVenta =0;
        // creamos una variable para almacenar los datos del precio de venta. 
       for(let producto of this._productos){
           totalVenta += producto.precio; // totalVenta = totalVenta + producto.precio
       }
       return totalVenta;
   }

   mostrarOrden(){
    let productosOrden = '';
    for(let producto of this._productos){
        productosOrden += producto.toString(); 
        return productosOrden;   
    }
    console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, productos: ${productosOrden}`);
     
}
   
}

let orden1 = new Orden();
orden1.agregarProducto(producto1); 
orden1.agregarProducto(producto2);

orden1.mostrarOrden();