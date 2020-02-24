import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  statusBlog: boolean;
  statusPost: boolean;

  ngOnInit() {
    this.statusBlog = true
  }
  active(status) {

    if (status === 'Blog') {
      this.statusBlog = true
      this.statusPost = !this.statusBlog
    } else if (status === 'Post') {
      this.statusPost = true
      this.statusBlog = !this.statusPost
    }

  }
}
