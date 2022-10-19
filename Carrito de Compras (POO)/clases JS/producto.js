// const productos = [
//   {
//     id: "1",
//     SKU: "0K3QOSOV4V",
//     title: "iFhone 13 Pro",
//     price: "938.99",
//   },
//   {
//     id: "2",
//     SKU: "TGD5XORY1L",
//     title: "Cargador",
//     price: "49.99",
//   },
//   {
//     id: "3",
//     SKU: "IOKW9BQ9F3",
//     title: "Funda de piel",
//     price: "79.99",
//   },
// ];

class Producto {
  constructor({ id, SKU, title, price, cantidad }) {
    this.id = id;
    this.SKU = SKU;
    this.title = title;
    this.price = Number(price);
    this.cantidad = cantidad;
  }
  getID() {
    return this.id;
  }
  getSku() {
    return this.SKU;
  }
  getTitle() {
    return this.title;
  }
  getPrice() {
    return this.price;
  }
  getCantidad() {
    return this.cantidad;
  }
  getTotal(tprice, cantidad) {
    return this.price * this.cantidad;
  }
}

const p1 = new Producto({
  id: "1",
  SKU: "0K3QOSOV4V",
  title: "iFhone 13 Pro",
  price: "938.99",
  cantidad: 1,
});

// console.log(p1.getID());
// console.log(p1.getSku());
// console.log(p1.getTitle());
// console.log(p1.getPrice());
// console.log(p1.getCantidad());
// p1.cantidad = 2;
// console.log(p1.getCantidad());
// console.log(p1.getTotal(p1.getPrice(), 3));
