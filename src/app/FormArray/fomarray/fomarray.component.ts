import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomarray',
  templateUrl: './fomarray.component.html',
  styleUrls: ['./fomarray.component.scss']
})
export class FomarrayComponent implements OnInit {
  userForm: any

  profileForm: any;
  isSubmitted: boolean = false
  myForm!: any;
  arr: any = FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      date: ["", Validators.required],
      arr: this.fb.array([this.createItem()])
    })
  }
  createItem() {
    return this.fb.group({
      IceCreamName: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  onSubmit() {
    console.log(this.myForm);
  }
  removeItem(i: number) {
    this.arr = this.myForm.get('arr') as FormArray
    this.arr.removeAt(i);
  }



}
