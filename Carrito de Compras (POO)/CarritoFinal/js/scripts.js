/*****************************CONSTANTES Y VARIABLES*****************************************/
const url = "https://jsonblob.com/api/973862124204081152";
const carrito = new Carrito();

// El evento DOMContentLoaded es disparado cuando el documento HTML
// ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", (e) => {
  //recuperamos los productos de la API.
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    pintarProductos(data);
  };

  fetchData();

  const templateProduct = document.getElementById(
    "template_product_id"
  ).content;
  //creamos un fragemnt para evitar el reflow.
  const fragment = document.createDocumentFragment();
  const tbody = document.getElementById("body_products");
  const carritoEl = document.getElementById("productosCarrito");
  const footerCarritoEl = document.getElementById("footerCarrito").content;
  const errorEl = document.querySelector("#error");

  //crea el template de los productos
  const pintarProductos = (data) => {
    data.products.forEach((item) => {
      templateProduct.getElementById("product__title").textContent = item.title;
      templateProduct.getElementById("product__sku").textContent = item.SKU;
      templateProduct.getElementById("product__price").textContent = item.price;
      templateProduct.getElementById("product__total").textContent = "0.00€";
      templateProduct.getElementById("btn_minus").dataset.id = item.id;
      templateProduct.getElementById("btn_add").dataset.id = item.id;
      templateProduct.querySelector("#quantity").dataset.id = item.id;
      templateProduct.querySelector(".product__price").dataset.id = item.id;
      templateProduct.querySelector(".product__total").dataset.id = item.id;

      const clone = templateProduct.cloneNode(true);
      fragment.appendChild(clone);
    });
    tbody.appendChild(fragment);
  };

  //EVENTOS PARA CONTROLAR LOS BOTONES DE SUMA Y RESTA
  tbody.addEventListener("click", (e) => {
    //eventos para los botones de añadir y quitar unidades.
    if (e.target.classList.contains("btn-info")) {
      //"si hay error lo quitamos"
      errorEl.classList.add("d-none");

      const tproducto = e.target.closest(".template_product_row");
      //creo el objeto producto a partir del e.target
      const id = tproducto.querySelector(".btn").dataset.id;
      const title = tproducto.querySelector("#product__title").innerText;
      const sku = tproducto.querySelector("#product__sku").innerText;
      const price = Number(
        tproducto.querySelector("#product__price").innerText
      );
      let cantidad = Number(tproducto.querySelector("#quantity").value);

      const producto = new Producto({ id, title, sku, price, cantidad });

      carrito.addProducto(producto);

      producto.actualizaUnidades(cantidad);
      tproducto.querySelector("#quantity").value = producto.cantidad;
      tproducto.querySelector(".product__total").innerText =
        producto.getTotal().toFixed(2) + "€";
      const total = carrito.totalCarrito();
      pintarCarrito();

      //actualizamos el total del carrito
      document.getElementById("carrito__total").innerText =
        total.toFixed(2) + "€";
    }
    //evento para el boton de restar y luego eliminar un producto del carrito.
    if (e.target.classList.contains("btn-danger")) {
      //"si hay error lo quitamos"
      errorEl.classList.add("d-none");

      const tproducto = e.target.closest(".template_product_row");
      const sku = tproducto.querySelector("#product__sku").innerText;
      //const cantidad = Number(tproducto.querySelector("#quantity").value);

      carrito.RestaUnidades(sku);
      const producto = carrito.existeProductoSku(sku);
      tproducto.querySelector("#quantity").value = producto.cantidad;
      if (producto.cantidad === 0) {
        carrito.quitarProducto(sku);
      }
      //ya tenemos la nueva cantidad.Calculamos el nuevo total y pintamos el carrito.
      const totalProducto = producto.getCantidad() * producto.getPrice();
      tproducto.querySelector(".product__total").innerText =
        totalProducto.toFixed(2) + "€";
      const total = carrito.totalCarrito();
      pintarCarrito();

      //actualizamos el total del carrito
      document.getElementById("carrito__total").innerText =
        total.toFixed(2) + "€";
    }
  });

  //EVENTO PARA CONTROLAR SI CAMBIAMOS EL VALOR DEL INPUT MANUALMENTE

  tbody.addEventListener("change", (e) => {
    //"si hay error lo quitamos"
    errorEl.classList.add("d-none");

    if (e.target.classList.contains("inputCantidad")) {
      const tproducto = e.target.closest(".template_product_row");
      //creo el objeto producto a partir del e.target
      const id = tproducto.querySelector(".btn").dataset.id;
      const title = tproducto.querySelector("#product__title").innerText;
      const sku = tproducto.querySelector("#product__sku").innerText;
      const price = Number(
        tproducto.querySelector("#product__price").innerText
      );
      const cantidad = Number(tproducto.querySelector("#quantity").value);

      const producto = new Producto({ id, title, sku, price, cantidad });
      if (cantidad >= 0) {
        carrito.addProductoInput(producto);

        carrito.actualizaUnidades(sku, cantidad);
        tproducto.querySelector(".product__total").innerText =
          producto.getTotal().toFixed(2) + "€";
        const total = carrito.totalCarrito();

        pintarCarrito();

        //actualizamos el total del carrito
        document.getElementById("carrito__total").innerText =
          total.toFixed(2) + "€";
      } else {
        errorEl.innerText = "Error: Por favor, introduzca un valor válido";
        errorEl.classList.remove("d-none");
        tproducto.querySelector("#quantity").value = 0;

        carrito.actualizaUnidades(sku, 0);
        tproducto.querySelector(".product__total").innerText =
          producto.getTotal().toFixed(2) + "€";
        const total = carrito.totalCarrito();
        pintarCarrito();
        document.getElementById("carrito__total").innerText =
          total.toFixed(2) + "€";
      }
    }
  });

  //crea el carrito en el DOM.
  const pintarCarrito = () => {
    const templateCarrito =
      document.querySelector("#template__carrito").content;
    carritoEl.innerHTML = "";
    const productos = carrito.obtenerProductos();
    productos.forEach((producto) => {
      templateCarrito.querySelector("#carrito__producto__title").textContent =
        producto.getTitle();
      const totalProducto = producto.getCantidad() * producto.getPrice();
      templateCarrito.querySelector("#carrito__producto__total").textContent =
        totalProducto.toFixed(2) + "€";
      const clone = templateCarrito.cloneNode(true);
      fragment.appendChild(clone);
    });
    carritoEl.appendChild(fragment);
  };
});
