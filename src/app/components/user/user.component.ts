import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies: string[];
  constructor() { 

    console.log("constructor ran...");
  }

  ngOnInit() {
    console.log("ngonInit ran...");
    this.name = 'Chiranjeevi';
    this.age = 24;
    this.email = 'chirud111@gmail.com';
    this.address = {
      city: 'Plano',
      state: 'TX',
      zip: 75024
    }
    this.hobbies = ['write code', 'watch movies', 'listen to music'];

  }
  onClick(){
    console.log("Hello...");
    this.name = "Chiran";
    this.hobbies.push('Cricket');
  }
}

interface Address{
  city:string,
  state:string,
  zip:number
}
