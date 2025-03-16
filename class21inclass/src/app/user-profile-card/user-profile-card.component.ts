import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './user-profile-card.component.html',
  styleUrl: './user-profile-card.component.css'
})
export class UserProfileCardComponent {
// Signals are like special variables that automatically update the UI when their value changes
name: WritableSignal<string | undefined> = signal(undefined);
age: WritableSignal<number | undefined> = signal(undefined);
status: WritableSignal<'active' | 'inactive' | 'banned'> = signal('inactive');

// This method chooses a background color based on the user’s status
statusColor = () => {
  if (this.status() === 'active') return 'lightgreen';
  if (this.status() === 'inactive') return 'lightgray';
  return 'lightcoral'; // For 'banned'
};

// This method sets new values for name, age, and status
setUser(name?: string, age?: number, status: 'active' | 'inactive' | 'banned' = 'inactive') {
  this.name.set(name);
  this.age.set(age);
  this.status.set(status);
}
}
