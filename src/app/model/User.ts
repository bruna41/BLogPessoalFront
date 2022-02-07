import { Post } from "./Post"

export class User {
    public id: number
    public nome: string
    public usuario: string
    public foto: string
    public senha: string
    public tipo: string
    public postagem: Post[]
}