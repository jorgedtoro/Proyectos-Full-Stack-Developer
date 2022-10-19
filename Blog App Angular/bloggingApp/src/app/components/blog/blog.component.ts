import { Component, OnInit } from '@angular/core';
import { Blog} from 'src/app/interfaces/blog.interface'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrNews:Blog[] = [];
  name:string="";
  apellido:string="";
  imagen:string="";
  titulo:string="";
  noticia:string="";
  fecha:string="";
  publicar:string="";


  constructor() { 
    /*array con dos noticias preliminares. El resto se crea en addNew */
    this.arrNews = [
      {nombre: 'Jorge', apellido:'de Toro',imagen:"assets/code-wrapper.png", titulo:'Angular', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem mi, placerat ac libero quis, tempus mattis quam. Mauris dui turpis, interdum vitae pulvinar at, elementum quis mauris. Nullam in sodales nisi. Suspendisse at ultrices dui. Vestibulum eros diam, scelerisque ut vehicula sed, pulvinar eget felis. Suspendisse a gravida lorem. Phasellus non nulla vel mi blandit maximus id ac massa. Integer mi purus, porttitor sed elementum eget, fringilla sit amet nibh. Mauris pellentesque vulputate magna, quis commodo dui aliquet sed. Vestibulum ipsum nibh, aliquet in consectetur a, ultricies sit amet augue. Phasellus commodo maximus vestibulum. Aenean tempor nisi sed metus ultricies tempus. Curabitur imperdiet nunc interdum sodales faucibus. Mauris sed ullamcorper turpis. Vestibulum in sem purus. In congue ligula velit, quis laoreet est malesuada quis. ', fecha:'2022-06-29'},
      {nombre: 'Jorge', apellido:'de Toro',imagen:"assets/code-wrapper.png", titulo:'Actividad 4. Vanilla JS', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem mi, placerat ac libero quis, tempus mattis quam. Mauris dui turpis, interdum vitae pulvinar at, elementum quis mauris. Nullam in sodales nisi. Suspendisse at ultrices dui. Vestibulum eros diam, scelerisque ut vehicula sed, pulvinar eget felis. Suspendisse a gravida lorem. Phasellus non nulla vel mi blandit maximus id ac massa. Integer mi purus, porttitor sed elementum eget, fringilla sit amet nibh. Mauris pellentesque vulputate magna, quis commodo dui aliquet sed. Vestibulum ipsum nibh, aliquet in consectetur a, ultricies sit amet augue. Phasellus commodo maximus vestibulum. Aenean tempor nisi sed metus ultricies tempus. Curabitur imperdiet nunc interdum sodales faucibus. Mauris sed ullamcorper turpis. Vestibulum in sem purus. In congue ligula velit, quis laoreet est malesuada quis.', fecha:'2022-06-30'}
      
    ]
  }

  ngOnInit(): void {
    this.publicaNews();
  }
  /*función para publicar las noticias nuevas */
  publicaNews():void{
    this.publicar="";
    this.arrNews.forEach(n => {
      
      this.publicar += `
      <article class="listado-new">
        <div class="new-img">
        <img class="new-img__img" src="${n.imagen}" alt="" />
        </div>
        <div class="new-title">
          <h2 class="new-title__h2">${n.titulo}</h2>
        </div>
        <div class="new-content">
          <p class="new-content__p">${n.noticia}</p>
        </div>
        <div class="new-alumn">
          <span>${n.nombre}</span> 
          <span>${n.apellido}</span>
        </div>
        <div class="new-date">${n.fecha}</div>
        </article>
      
      `
      return this.publicar;
    })
  }

  addNew(){
    /* creamos nuevo objeto con los datos del formulario */
    let newNew: Blog = {
       nombre: this.name,
       apellido:this.apellido,
       imagen:this.imagen, 
       titulo:this.titulo, 
       noticia:this.noticia, 
       fecha:this.fecha
    };
   /* VALIDACIÓN DE DATOS. */ 
   if(this.name !="" && this.apellido!="" && this.imagen!="" && this.titulo!="" && this.noticia!="" && this.fecha!=""){
    /* Todos los campos deben estar completados para hacer push y publicar */
    this.arrNews.push(newNew);
    this.publicaNews();
   
     this.name= ""
     this.apellido= ""
     this.imagen= "" 
     this.titulo =""
     this.noticia=""
     this.fecha=""
   }else{
    alert("Por favor, introduzca un valor válido en todos los campos")
   }
  }

}
