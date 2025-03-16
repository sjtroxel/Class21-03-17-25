import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteRotatorComponent } from './quote-rotator/quote-rotator.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { TaskListComponent } from "./task-list/task-list.component";
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteRotatorComponent, ProductListComponent, ClickCounterComponent, TaskListComponent, UserProfileCardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'class21inclass';
}
