import { Component, signal } from '@angular/core';
import { User } from '../shared/models/user.model';


@Component({
  selector: 'app-user-card',
  imports: [],
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  user = signal<User>({
    id: 'u1',
    name: 'Steffan',
    avatar: ''
  })
}
