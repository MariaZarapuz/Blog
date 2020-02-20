import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  listaPosts: Post[];
  post: Post;
  inputSearch: string;
  constructor(private postService: PostService) {
    this.inputSearch = '';
  }

  async ngOnInit() {
    this.listaPosts = await this.postService.getAllPost();
    console.log(this.listaPosts);

  }
  async filterCategory($event) {

    if ($event.target.value == '0') {
      this.listaPosts = await this.postService.getAllPost();
    } else {
      this.listaPosts = await this.postService.getPostByCategory($event.target.value);
      console.log(this.post);
    }
  }
  async filterTitle($event) {
    this.listaPosts = await this.postService.getPostTitle($event.target.value)
    console.log($event)
  }

  // async search() {
  //   this.listaPosts = await this.postService.getPostTitle(this.inputSearch)


  // }
  // async deletePost() {
  //   this.listaPosts = await this.postService.getByIdPost(this.post.id)
  //   console.log(this.listaPosts)
  // }
}
