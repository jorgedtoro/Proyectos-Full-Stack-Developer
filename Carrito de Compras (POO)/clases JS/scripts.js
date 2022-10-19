const carrito = new Carrito();

const producto1 = new Producto({
  id: "1",
  SKU: "0K3QOSOV4V",
  title: "iFhone 13 Pro",
  price: "938.99",
  cantidad: 1,
});
const producto2 = new Producto({
  id: "2",
  SKU: "TGD5XORY1L",
  title: "Cargador",
  price: "49.99",
  cantidad: 1,
});
const producto3 = new Producto({
  id: "3",
  SKU: "IOKW9BQ9F3",
  title: "Funda de piel",
  price: "79.99",
  cantidad: 1,
});
const producto4 = new Producto({
  id: "3",
  SKU: "IOKW9BQ9F3",
  title: "Funda de piel",
  price: "79.99",
  cantidad: 1,
});
const producto5 = new Producto({
  id: "2",
  SKU: "TGD5XORY1L",
  title: "Cargador",
  price: "49.99",
  cantidad: 1,
});
carrito.addProducto(producto1);
carrito.addProducto(producto2);
carrito.addProducto(producto3);

console.log(carrito.addProducto(producto4));

totalcarrito = carrito.totalCarrito();
console.log(totalcarrito);

const productosCarrito = carrito.obtenerProductos();
console.log(productosCarrito);
carrito.addProducto(producto5);

console.log(carrito.obtenerProductos());

console.log(carrito.totalCarrito());
