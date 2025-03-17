import { Component, signal } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = signal<Task[]>([{
    id: 't1',
    name: 'make bed'
  },
  {
    id: 't2',
    name: 'wash dishes',

  }])
}
