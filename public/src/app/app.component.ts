import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API:';
  tasksTitle = 'All Tasks';
  tasks: any = [];
  // task: any;

  constructor(private _httpService: HttpService){}

  ngOnInit() { 
    this.getTasksFromServer();
    // this.getTaskFromServer();
  }

  getTasksFromServer() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
      console.log("Here are our tasks! ", data);
    })
  }

  getTaskFromServer() {
    let observable = this._httpService.getTask();
    observable.subscribe(data => {
      console.log("Here is the task!", data);
    })
  }

  addTaskFromServer() {
    let observable = this._httpService.addTask();
    observable.subscribe(data => {
      console.log("adding a task...", data);
    })
  }

  updateTaskFromServer() {
    let observable = this._httpService.updateTask();
    observable.subscribe(data => {
      console.log("Updating task", data);
    })
  }

  deleteTaskFromServer() {
    let observable = this._httpService.deleteTask();
    observable.subscribe(data => {
      console.log("Deleting task", data);
    })
  }

}
