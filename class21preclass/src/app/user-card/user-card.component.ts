import { Component, WritableSignal, signal } from '@angular/core';
import { User } from './user.type';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  // A WritableSignal lets us change the user’s data easily
  user: WritableSignal<User> = signal({ id: '', avatar: '', name: '' });

  setUser(newUser: User) {
    this.user.set(newUser);
  }
}
