import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
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
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService: DataService) { 

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
    this.dataService.getPosts().subscribe((posts)=>{
     // console.log(posts);
     this.posts = posts;
    });

  }
  onClick(){
    console.log("Hello...");
    this.name = "Chiran";
    this.hobbies.push('Cricket');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0; i<this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
    
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address{
  city:string,
  state:string,
  zip:number
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
