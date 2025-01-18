import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TasksComponent } from './components/tasks/tasks.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [ HeaderComponent,CommonModule,TasksComponent, FontAwesomeModule,TaskItemComponent,RouterOutlet, FormsModule,RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {

  }
}
