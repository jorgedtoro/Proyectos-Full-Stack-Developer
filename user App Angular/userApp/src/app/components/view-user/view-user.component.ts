import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  myUser: User | any;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //capturamos ruta activa
    //la función async en el ámbito correcto
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.idUser);

      let response = await this.usersService.getById(id);
      this.myUser = response;
    });
  }
  //ToDo --> ver si este método debería estar en el servicio.
  async deleteUser(pId: number): Promise<void> {
    if (pId !== undefined) {
      let response = await this.usersService.delete(pId);
      let userDelete = response;
      let message: string = `${userDelete.first_name} 
                              ${userDelete.last_name}`;

      //Alerta de eliminación de usuario
      Swal.fire({
        title: '¡Estás seguro?',
        text: 'No se podrá recuperar el usuario',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Eliminado!', `${message} ha sido eliminado`, 'success');
          this.router.navigate(['/home']);
        } else {
          Swal.fire('¡Se ha cancelado el proceso');
        }
      });
    }
  }
}
