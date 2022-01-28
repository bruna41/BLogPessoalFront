import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  postagem: Post = new Post()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Post) => {
      this.postagem = resp
    })
  }

  apagar() {
    this.postagemService.deletePostagem(this.idPost).subscribe(()=> {
      alert('Postagem apagada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }
}