import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
 
  //PROPIEDADES
  arrUsers: User[] = [];
  //propiedad de pag actual para poder pintarla en el HTML.
  currentPage: number = 1;
  //total de páginas de la base de datos de la API
  totalPages: number = 0;

  //CONSTRUCTOR
  //inyectamos el servicio en el constructor de la clase.
  constructor(private usersService: UsersService) {}

  //MÉTODOS
  ngOnInit(): void {
    this.gotoPage(this.currentPage);
  
  }


  async gotoPage(pPage: number): Promise<void>{
    //hago una petición al servicio de los usuarios de la API.
    //se gestiona la respuesta que es una promesa.
  
    try {
      let response = await this.usersService.getAll(pPage);
     
      //recupero la página de la respuesta.
      this.currentPage = response.page;
      this.arrUsers = response.data;
      this.totalPages = response.total_pages;
    
   } catch (error) {
    console.log(error)
   }
  
   };
}
