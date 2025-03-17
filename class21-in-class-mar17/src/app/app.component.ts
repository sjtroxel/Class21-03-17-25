import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserStatusComponent } from './user-status/user-status.component';
// import { BookItemComponent } from './favorite-books-exercise-2/favorite-books-exercise-2.component';



@Component({
  selector: 'app-root',
  imports: [UserCardComponent, TaskListComponent, ShoppingCartComponent, UserStatusComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'class21-in-class-mar17';
}
