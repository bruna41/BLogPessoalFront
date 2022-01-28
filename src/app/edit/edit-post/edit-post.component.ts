import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postagem: Post = new Post()
  tema: Tema = new Tema
  listTemas: Tema[]
  idTema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente.')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllTemas()
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Post)=>{
      this.postagem = resp
    })
  }

  findByIdTema(id:number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listTemas = resp
    })
  }

  atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Post)=>{
      this.postagem = resp
      alert('Atualizada!')
      this.router.navigate(['/inicio'])
    })
  }

}
