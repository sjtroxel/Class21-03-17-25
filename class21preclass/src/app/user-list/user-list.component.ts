import { Component, signal } from '@angular/core';
import { User } from '../user-card/user.type';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  // A signal holding an array of users
  users = signal<User[]>([
    { id: '001', avatar: 'https://via.placeholder.com/100', name: 'Alice Johnson' },
    { id: '002', avatar: 'https://via.placeholder.com/100', name: 'Bob Smith' },
    { id: '003', avatar: 'https://via.placeholder.com/100', name: 'Catherine Lee' },
  ]);

  // This method calls setUser on the child UserCardComponent to show a selected user
  setUserForCard(userCard: UserCardComponent, user: User) {
    userCard.setUser(user);
  }
}
