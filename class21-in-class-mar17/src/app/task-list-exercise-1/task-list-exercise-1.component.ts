import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-task-list-exercise-1',
  imports: [],
  standalone: true,
  templateUrl: './task-list-exercise-1.component.html',
  styleUrl: './task-list-exercise-1.component.css'
})
export class TaskListExercise1Component {
  tasks = signal<{ id: string; name: string }[]>([{
    id: 't1',
    name: 'make bed'
  },
  {
    id: 't2',
    name: 'wash dishes',

  }])
}
