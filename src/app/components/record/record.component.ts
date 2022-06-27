import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emptyField, postalCodeValidator } from 'src/app/validators/validator';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      resName: new FormControl(),
      resPhone: new FormControl(),
      resServices: new FormControl(),
      email : new FormControl(),
      resAddress: new FormControl(),
      city: new FormControl(),
      postalCode: new FormControl('', [Validators.required, postalCodeValidator()]),
      
    })

  }

  submit(){

  }

  clearForm(){
    this.form.reset();
  }

}
