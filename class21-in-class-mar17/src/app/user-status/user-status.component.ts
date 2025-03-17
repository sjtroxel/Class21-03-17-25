import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-status',
  imports: [],
  standalone: true,
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {
userStatus = signal<'active' | 'inactive' | 'banned'>('inactive')
}
