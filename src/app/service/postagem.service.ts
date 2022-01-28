import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Post[]>{
    return this.http.get<Post[]>('https://personalblogbru.herokuapp.com/postagens', this.token)
  }

  postPostagem(postagem: Post): Observable<Post>{
    return this.http.post<Post>('https://personalblogbru.herokuapp.com/postagens', postagem, this.token)
  }
}