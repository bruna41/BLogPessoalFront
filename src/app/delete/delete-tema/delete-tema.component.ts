import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-tema',
  templateUrl: './delete-tema.component.html',
  styleUrls: ['./delete-tema.component.css']
})
export class DeleteTemaComponent implements OnInit {

  tema: Tema = new Tema
  idTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token == '') {
      this.alerta.showAlertWarning('Sua sessão expirou, faça login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.idTema = this.route.snapshot.params['id']
      this.findByIdTema(this.idTema)
  }

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  apagar() {
    this.temaService.deleteTema(this.idTema).subscribe(()=>{
      this.alerta.showAlertSuccess('Tema apagado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }

}
