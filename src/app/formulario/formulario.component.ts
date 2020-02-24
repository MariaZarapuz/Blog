import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../post.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  imageUrl: string;
  constructor(private postService: PostService) {
    this.imageUrl = "";

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      category: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    const imgValue = this.form.controls.image;
    imgValue.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.imageUrl = value;
    })

  }

  onSubmit() {

    this.postService.addPost(this.form.value);

    this.form.reset();

  }

}
