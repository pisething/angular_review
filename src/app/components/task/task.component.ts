import { Component, Input } from '@angular/core';
import { ThetaskComponent } from "./thetask/thetask.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './new-task/newtask.model';
import { TaskService } from './task.service';


@Component({
  selector: 'app-task',
  imports: [ThetaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isTaskAdded = false;

  constructor(private taskService: TaskService){}

   
  get selectedUserTask(){
    return this.taskService.getUserTask(this.userId);
  }

  onStartAddTask(){
    this.isTaskAdded = true;
  }

  onCloseAddTask(){
    this.isTaskAdded = false;
  }
}
