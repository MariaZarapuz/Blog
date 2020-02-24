import { Injectable } from '@angular/core';
import { Post } from './models/post';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPosts: Post[];
  idAdd: any;

  constructor() {

    this.arrPosts = new Array;

  }

  addPost(formValue: any): Promise<Post> {

    if (this.idAdd !== undefined) {
      this.idAdd = JSON.parse(localStorage.getItem('post')).length;
      console.log(this.idAdd)
    } else if (this.idAdd == null) {
      this.idAdd = 0

    }

    const newPost = new Post(
      this.idAdd++,
      formValue.title,
      formValue.text,
      formValue.author,
      formValue.image,
      formValue.category)

    if (newPost.image == "") {
      newPost.image = "https://becagrafic.com/wp-content/uploads/2019/09/imagen-no-disponible.jpg"
    }

    const prom = new Promise<any>((resolve, reject) => {
      resolve(this.arrPosts.push(newPost));
      // console.log(this.arrPosts)
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

  getPostByCategory(cate: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const arrFilterCat = this.arrPosts.filter(item => item.category === cate);
      resolve(arrFilterCat);
    });

    return prom;


  }

  getPostTitle(title: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const arrFilterTitle = [];
      this.arrPosts.filter(item => {
        const arrTitle = item.title.split(' ');
        const booleanTitle = arrTitle.includes(title)
        if (booleanTitle) {
          arrFilterTitle.push(item);
        }
      })

      resolve(arrFilterTitle)
    })

    return prom;
  }


  getByIdPost(pId: any): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const positionId = this.arrPosts.findIndex(post => post.id == pId);
      resolve(this.arrPosts.splice(positionId, 1))
      localStorage.setItem('post', JSON.stringify(this.arrPosts));
    });
    return prom;
  }

}

