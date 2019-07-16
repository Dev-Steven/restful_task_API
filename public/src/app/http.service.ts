import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    // this.getTasks();
  }
  
  getTasks() {
    return this._http.get('/tasks');
    // return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    // let observable = this._http.get('/tasks')
    // observable.subscribe(data => console.log("Got it", data));
  }

  getTask(id) {
    console.log('In service and id is: ', id)
    console.log(`Still in service but going to route /task/:${id}`)
    return this._http.get(`/task/${id}`);
  }

  addTask(newtask) {
    console.log('inside service')
    return this._http.post('/task', newtask);
  }

  updateTask(id, updateTask) {
    console.log('In server')
    console.log(`ID: ${id}`)
    console.log(`Update Task: ${updateTask}`)
    return this._http.put(`/update/${id}`, updateTask);
  }

  deleteTask(id) {
    console.log('In Service, ID:',id);
    return this._http.delete(`/delete/${id}`);
  }

}


