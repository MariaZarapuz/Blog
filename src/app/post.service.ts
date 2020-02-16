import { Injectable } from '@angular/core';
import { Post } from './models/post';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPosts: Post[];
  post: Post;
  constructor() {

    this.arrPosts = [];
  }

  addPost(post: Post): Promise<Post> {
    const prom = new Promise<any>((resolve, reject) => {
      resolve(this.arrPosts.push(post));
      console.log(this.arrPosts);
      localStorage.setItem('post', JSON.stringify(this.arrPosts));

    });


    return prom;

  }

  getAllPost(): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      this.arrPosts = JSON.parse(localStorage.getItem('post'));
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
