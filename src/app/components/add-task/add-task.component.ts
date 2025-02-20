import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();


  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService){
    this.subscription= this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }




  onSubmit(){
     if(!this.text){
      alert('Please add a task!');
      return;
     }


     const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
     };


     this.onAddTask.emit(newTask);

     // Clear the form after submitting
     this.text = '';
     this.day = '';
     this.reminder = false;

  }

}
