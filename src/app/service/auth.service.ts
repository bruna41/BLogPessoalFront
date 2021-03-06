import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://personalblogbru.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: User): Observable<User> {
    return this.http.post<User>('https://personalblogbru.herokuapp.com/usuarios/cadastrar', usuario)
  }

  atualizar(usuario: User): Observable<User> {
    return this.http.put<User>('https://personalblogbru.herokuapp.com/usuarios/atualizar', usuario)
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`https://personalblogbru.herokuapp.com/usuarios/${id}`)
  }

  logado() {
    let ok = false
    if (environment.token != '')
     ok = true
    return ok
  }
  adm() {
    let ok = false
    if (environment.tipo == 'adm')
      ok = true
    return ok
  }
}
