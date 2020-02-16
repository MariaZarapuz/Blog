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
  constructor(private postService: PostService) { }

  async ngOnInit() {
    this.listaPosts = await this.postService.getAllPost();
    console.log(this.listaPosts);



    this.post = await this.postService.getPostByCategory('maria');
    console.log(this.post);


  }


}
