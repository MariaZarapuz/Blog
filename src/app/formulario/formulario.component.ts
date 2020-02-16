import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  constructor(private postService: PostService) {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    // tslint:disable-next-line: max-line-length
    const post = new Post(this.form.value.title, this.form.value.text, this.form.value.author, this.form.value.image, this.form.value.category);
    console.log(post);
    this.postService.addPost(post);

  }

}
