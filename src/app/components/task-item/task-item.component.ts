import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Task} from '../../Task';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-task-item',
  imports: [FormsModule, FontAwesomeModule, CommonModule ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task>= new EventEmitter();

  faTimes=faTimes;

  onDelete(task: Task){
    this.onDeleteTask.emit(task); //sends the task object to the parent component  (the parent component (Task) will delete the task item )
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}
