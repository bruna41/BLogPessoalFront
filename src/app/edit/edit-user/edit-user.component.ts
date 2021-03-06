import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token == '') {
      this.alerta.showAlertWarning('Sua sessão expirou, faça login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: User)=>{
      this.user = resp
    })
  }

  atualizar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha) {
      this.alerta.showAlertDanger('Senhas incorretas, escreva novamente.')
    }else {
      this.authService.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.alerta.showAlertSuccess('Usuário atualizado com sucesso, faça login novamente!')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/entrar'])
      })
    }
  }
}
