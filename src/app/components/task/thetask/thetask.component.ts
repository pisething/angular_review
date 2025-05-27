import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-thetask',
  imports: [CardComponent, DatePipe],
  templateUrl: './thetask.component.html',
  styleUrl: './thetask.component.css'
})
export class ThetaskComponent {

  @Input() task! : Task;
  private taskService = inject(TaskService);

  onComplete(){
    console.log("trigger complete task");
    this.taskService.removeTask(this.task.id);
  }

}
