import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./components/task/task.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }


  onSelected(id: string){
    this.selectedUserId = id
  }
  
}
