import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';
import { isBuffer } from 'util';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  listaPosts: Post[];
  post: Post;
  inputSearch: string;
  displayNone: boolean;
  result: string;

  constructor(private postService: PostService) {
    this.inputSearch = '';
    this.listaPosts = new Array;
  }

  async ngOnInit() {
    this.listaPosts = await this.postService.getAllPost();
    this.result = 'No ningun post guardado, ingrese uno';
    this.takeWarning(this.result)

  }
  async filterCategory($event) {

    if ($event.target.value == '0') {
      this.listaPosts = await this.postService.getAllPost();
    } else {
      this.listaPosts = await this.postService.getPostByCategory($event.target.value);

    }
    this.result = 'No hay resultados'
    this.takeWarning(this.result)
  }
  async filterTitle($event) {
    if ($event.keyCode == 13) {
      this.listaPosts = await this.postService.getPostTitle($event.target.value)

    } else if ($event.target.value == "") {
      this.listaPosts = await this.postService.getAllPost();
    }
    this.result = 'No hay resultados'
    this.takeWarning(this.result);
  }


  async deletePost($event) {
    const booleanDelete = confirm('Estas seguro de que quieres borrarme')
    if (booleanDelete == true) {
      await this.postService.getByIdPost($event.target.id)
      this.listaPosts = await this.postService.getAllPost()
      this.result = 'No ningun post guardado, ingrese uno';
      this.takeWarning(this.result)
    }



  }
  takeWarning(title) {
    if (this.listaPosts.length == 0) {
      this.displayNone = true;
      this.result = title;
    } else {
      this.displayNone = false
    }
  }

}
