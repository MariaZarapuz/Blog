import { Injectable } from '@angular/core';
import { Post } from './models/post';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPosts: Post[];
  post: Post;
  constructor() {

    this.arrPosts = [
      new Post('pepe', 'pepe', 'pepe', 'pepe', 'pepe', 'pepe'),
      new Post('maria', 'maria', 'maria', 'maria', 'maria', 'maria'),
      new Post('juan', 'juan', 'juan', 'juan', 'juan', 'juan'),
    ];
  }

  addPost(post: Post): Promise<Post> {
    const prom = new Promise<any>((resolve, reject) => {
      resolve(this.arrPosts.push(post));
      console.log(this.arrPosts);

    });
    return prom;

    localStorage.setItem('post', JSON.stringify(post));


  }

  getAllPost(): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts);
    });
    return prom;
  }

  getPostByCategory(cate: string): Promise<Post> {
    const prom = new Promise<Post>((resolve, reject) => {
      const arrFilterCat = this.arrPosts.find(item => item.category === cate);
      resolve(arrFilterCat);
    });

    return prom;


  }


}
