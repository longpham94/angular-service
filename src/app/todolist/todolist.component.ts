import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TodolistService } from '../todolist.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css', './todolist.component.css.less']
})
export class TodolistComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private todoService: TodolistService) { }
  newTodo: Todo = new Todo();
  todo_data;
  tripId;
  ngOnInit() {
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }

  getTodo(id): void {

    this.todoService.getTodo(id).subscribe(data => {
      this.tripId = id;
      if (data['status'] == '0') this.todo_data = data['todoList'];
      else (this.todo_data = data['message']);
    })
  }

  addTodo() {
    this.newTodo.tripId = this.tripId;
    this.todoService.addTodo(this.newTodo).subscribe(data => {
      console.log("After Post --- " + data);
      this.getTodo(this.tripId);
      this.newTodo = new Todo();
    });
  }

  toggleTodo(id, status) {
    if (status == 0) { status = 1}
    else if (status == 1) {status = 0}
    this.todoService.toggleTodo(id, status).subscribe(data => {
      console.log("After Post --- " + data);
    });
  }

  removeTodo(id) {
    this.todoService.removeTodo(id).subscribe(data => {
      console.log("After Post --- " + data);
      this.getTodo(this.tripId);
    });
  }

}
