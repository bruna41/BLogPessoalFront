import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private http: HttpClient

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://personalblogbru.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: User): Observable<User> {
    return this.http.post<User>('https://personalblogbru.herokuapp.com/usuarios/cadastrar', usuario)
  }
}
