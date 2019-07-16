import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API:';
  tasks: Array<Object>;
  task: any;
  specific = [];
  tasksTitle = 'All Tasks';
  clickSpecific: boolean;
  newTask: any;

  constructor(private _httpService: HttpService){}

  ngOnInit() { 
    this.clickSpecific = false;
    this.newTask = {title: "", description: ""};
  }

  getTasksFromServer() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
      console.log("Here are our tasks! ", data);
    })
  }

  getTaskFromServer(id) {
    //get task needs an ID find a way to get an id...
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Here is the task!", data);
      this.task = data;
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

  onButtonClick(): void { 
    console.log(`Click event is working`)
    this.getTasksFromServer();
  }

  onButtonClickShow(id: String) {
    console.log(`In component`);
    this.getTaskFromServer(id);
    this.clickSpecific = true;
  }

  onSubmit(){
    console.log('in component')
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      this.newTask = {title: "", description: ""}
      console.log("Got our data from posts back", data);
    })
  }

}
