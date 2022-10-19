import { Injectable } from '@angular/core';
import { PUBLICACIONES } from '../db/publicaciones.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private id: number = 3;
  private arrPost: Post[] = PUBLICACIONES
  constructor() { }

  getAll(): Post[] {
    this.arrPost = this.arrPost.sort((a, b) => b.id - a.id)
    return this.arrPost;
  }

  create(pFormData: any): string {
    let nuevoPost: Post = { id: this.id, ...pFormData }
    this.arrPost.unshift(nuevoPost);
    //igualamos la variable que se pinta al nuevo resultado del array
    this.id++;
    return 'post publicado correctamente'
  }
}
