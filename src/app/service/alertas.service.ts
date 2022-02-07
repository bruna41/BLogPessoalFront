import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlet(type: string, message: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
    bsModalRef.content.type = type
    bsModalRef.content.type = message
  }

  showAlertDanger(message: string){
    this.showAlet('danger', message)
  }

  showAlertSuccess(message: string){
    this.showAlet('success', message)
  }

  showAlertWarning(message: string){
    this.showAlet('warning', message)
  }
}
