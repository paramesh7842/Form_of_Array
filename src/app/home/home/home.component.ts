import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: any;
  ice_cream: any;
  customer_name: any;
  list_of_items: any = [];
  price: any = 30;
  amount: any
  amount1: any
  amount2: any
  i:any
  constructor() { }
  ngOnInit(): void {
    this.form = new FormGroup(({
      "name": new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z ]*$")]),
      "address": new FormControl("", [Validators.required, Validators.minLength(2)]),
      "phone_number": new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("[6-9]\\d{9}")]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "date_of_purchase": new FormControl("", [Validators.required]),

    }));
    this.ice_cream = new FormGroup(({
      "ice_cream": new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      "quantity": new FormControl("", [Validators.required])
    }));
  };
  get name() {
    return this.form.get("name")
  };
  get address() {
    return this.form.get("address")
  };
  get phone_Number() {
    return this.form.get("phone_number")
  };
  get email() {
    return this.form.get("email")
  };
  get dateOfPurchase() {
    return this.form.get("date_of_purchase")
  };

  get iceCreamMenu() {
    return this.ice_cream.get("ice_cream")
  }

  get quantity() {
    return this.ice_cream.get("quantity")
  }
  submitItems() {
    console.log(this.form.value)
    localStorage.setItem("Name", this.form.value.name);
    localStorage.setItem("Adress", this.form.value.address);
    localStorage.setItem("Contact_Number", this.form.value.phone_number);
    localStorage.setItem("Email", this.form.value.email);
    localStorage.setItem("Date", this.form.value.date_of_purchase);
    this.customer_name = localStorage.getItem("Name");
  }
  addItem() {
    localStorage.setItem("ice_cream", this.ice_cream.value.ice_cream);
    localStorage.setItem("quantity", this.ice_cream.value.quantity);
    this.list_of_items.push(this.ice_cream.value);
    console.log(this.list_of_items);
    if (this.ice_cream.value.ice_cream == "Vanilla" && this.ice_cream.value.quantity) {
      this.amount1 = (this.ice_cream.value.quantity * this.price);
      console.log(this.amount = this.amount1)
    }
    else if (this.ice_cream.value.ice_cream == "ButterScotch" && this.ice_cream.value.quantity) {
      this.amount2 = (this.ice_cream.value.quantity * this.price);
      console.log(this.amount = this.amount1 + this.amount2)
    }

  }
  removeItem(i: number) {
    // this.list_of_items.pop(this.ice_cream.value)
    this.list_of_items.splice(i,1)
  }
}
