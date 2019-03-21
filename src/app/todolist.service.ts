import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    })
  };


  getTodo(id) {
    return this.http.request("GET", "http://127.0.0.1:3000/todo/" + id, this.httpOptions);
  }

  addTodo(todo) {
    console.log("Name --- " + todo.name);
    console.log("Description --- " + todo.des);
    console.log("Trip ID --- " + todo.tripId);
    var body = {
      "tripId": todo.tripId,
      "name": todo.name,
      "des": todo.des
    };
    return this.http.post("http://127.0.0.1:3000/todo/", body, this.httpOptions);
  }
}
