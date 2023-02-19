import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
// import {Contact} from "../app.component";

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
// let contactForm = null;
export class MyformComponent implements OnInit {
  contactForm = this.fb.group({
    name: [''],
    email: ['']
  })

  user = {
    name: "",
    email: ""
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

  getName() {
    return this.contactForm.get('name');
  }

  getEmail() {
    return this.contactForm.get('email');
  }

  showData(){
    this.user.name = this.getName()?.value
    this.user.email = this.getEmail()?.value
    console.log(this.user)
  }



}

