import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //PROPIEDADES
  private arrUsers: User[] = []; //creamos un array de usuarios de tipo Usuario, de tipo private.
  urlAPI: string = 'https://peticiones.online/api/users/'; //URL de la API base

  //CONSTRUCTOR
  constructor(private httpClient: HttpClient) {
    //llenamos el array con los datos del array USUARIOS //tengo que llamar a la rest API
  }

  //MÉTODOS

  //método para recuperar usuarios
  getAll(pPage: number): Promise<any> {
    //return this.arrUsers;
    let resp = lastValueFrom(
      this.httpClient.get<any>(`${this.urlAPI}/?page=${pPage}`)
    );

    return resp;
  }

  //método que devuelve un usuario de tipo User en base a su id
  getById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.urlAPI}/${pId}`));
  }

  //método para eliminar un usuario
  delete(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.urlAPI}/${pId}`));
  }

  //método para crear un nuevo usuario
  createUser(pUser: User): Promise<any> {
    return lastValueFrom(this.httpClient.post<User>(this.urlAPI, pUser));
  }

  //método para actualizar datos de un usurario
  updateUser(pUser: User): Promise<any> {
    return lastValueFrom(
      this.httpClient.put<User>(`${this.urlAPI}/${pUser.id}`, pUser)
    );
  }
}
