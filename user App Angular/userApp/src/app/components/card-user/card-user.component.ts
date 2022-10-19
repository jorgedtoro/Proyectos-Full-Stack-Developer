import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
})
export class CardUserComponent implements OnInit {
  //input del user
  @Input() myUser!: User;

  // inyectamos el servicio Users.
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  async deleteUser(pId: number | undefined) {
    if (pId !== undefined) {
      let response = await this.usersService.delete(pId);
      //Usuario a eliminar
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
        } else {
          Swal.fire('Se ha cancelado el proceso');
        }
      });
    }
  }
}
