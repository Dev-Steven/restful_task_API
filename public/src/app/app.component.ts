import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Restful Tasks API:';
  tasksTitle = 'All Tasks';

  tasks: any;
  task: any;
  newTask: any;
  updateTask: any;
  deleteTask: any;
  
  clickSpecific = false;
  showEdit = false;

  constructor(private _httpService: HttpService){}

  ngOnInit() { 
    // this.clickSpecific = false;
    this.newTask = {title: "", description: ""};
    this.updateTask = {title: "", description: ""};
  }

  getTaskFromServer(id) {
    //get task needs an ID find a way to get an id...
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Here is the task!", data);
      this.task = data;
    })
  }

  onButtonClick(): void { 
    console.log(`Click event is working`)
    // this.getTasksFromServer();
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
      console.log("Here are our tasks! ", data);
    })
  }

  onButtonClickShow(id: String) {
    console.log(`In component`);
    this.getTaskFromServer(id);
    this.clickSpecific = true;
  }

  onSubmit() {
    console.log('in component');
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      this.newTask = {title: "", description: ""};
      console.log("Got our data from posts back", data);
      this.onButtonClick();
    })
  }

  onEditButton(id: String) {
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Here is the task!", data);
      this.updateTask = data;
    })
    console.log(`Id is: ${id}`)
    console.log('Showing edit div...');
    this.showEdit = true;
    this.onButtonClick();
    // this.onSubmitUpdate(id);
  }

  onSubmitUpdate(id: String) {
    console.log('In component');
    console.log(`ID: ${id}`)
    console.log(`updateTask: ${this.updateTask}`)
    let observable = this._httpService.updateTask(id, this.updateTask);
    observable.subscribe(data => {
      // this.updateTask = {title: data.title, description: ""}
      console.log("Update Complete!", data);
      this.updateTask = {title: "", description: ""};
      this.onButtonClick();

    })

  }

  onSubmitDelete(id: String){
    console.log('In component. Id:',id)
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log('deleting', data)
      this.onButtonClick();
    })
  }

}
