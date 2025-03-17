import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = signal<string>('U1');
  tasks = [
    { id: 'T1', title: 'Master Angular', userId: 'U1' },
    { id: 'T2', title: 'Build a Web App', userId: 'U2' }
  ];

  get selectedUserTasks() {
    // Only show tasks that belong to the current userId
    return this.tasks.filter(task => task.userId === this.userId());
  }
}
