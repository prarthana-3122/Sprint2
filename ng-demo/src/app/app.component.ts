import { Component } from '@angular/core';
import UsersJson from './users.json';

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-demo';
  Users: USERS[] = UsersJson;
  constructor(){
    console.log(this.Users);
  }
}
