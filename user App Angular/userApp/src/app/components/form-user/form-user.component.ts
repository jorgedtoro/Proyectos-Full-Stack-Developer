import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { __awaiter } from 'tslib';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  userForm: FormGroup;
  myUser: User | any;
  dinamicText: string = 'Nuevo';

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = new FormGroup(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        image: new FormControl('', [Validators.required]),
      },
      []
    );
  }

  ngOnInit(): void {
    //diferenciamos entre un registro nuevo y una actualización

    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.idUser);

      if (id) {
        this.dinamicText = 'Actualizar';
        const response = await this.usersService.getById(id);

        const user: User = response;

        this.userForm = new FormGroup(
          {
            first_name: new FormControl(user?.first_name, [
              Validators.required,
              Validators.minLength(3),
            ]),
            last_name: new FormControl(user?.last_name, [Validators.required]),
            email: new FormControl(user?.email, [
              Validators.required,
              Validators.email,
            ]),
            image: new FormControl(user?.image, [Validators.required]),
            id: new FormControl(user?.id, []),
          },
          []
        );
      }
    });
  }
  //el usuario cancela la actualización o registro de un User.
  cancel(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = parseInt(params.idUser);
      if (id) {
        Swal.fire('El usuario no se ha actualizado');
      } else {
        Swal.fire('El usuario no se ha registrado');
      }
    });
  }

  async getDataForm(): Promise<void> {
    let user = this.userForm.value;

    if (user.id) {
      //actualizamos usuario
      try {
        let response = await this.usersService.updateUser(user);
        Swal.fire(
          `El usuario:
          ${response.first_name} ${response.last_name}, 
          se ha actualizado`
        );
        this.router.navigate(['/home']);
      } catch (error) {
        console.log(error);
      }
    } else {
      //creamos
      let response = await this.usersService.createUser(user);
      if (response.id) {
        try {
          Swal.fire(
            `Se ha creado el usuario: 
            ${response.first_name} ${response.last_name}`
          );
          this.router.navigate(['/home']);
        } catch (error) {
          console.log(error);
        }
      } else {
        Swal.fire('Ha ocurrido un error, inténtelo de nuevo');
      }
    }
  }
}
