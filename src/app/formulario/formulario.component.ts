import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  constructor() {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

}
