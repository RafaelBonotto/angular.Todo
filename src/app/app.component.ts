import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public todos: Todo[] = []; 
  public titulo: String = "Minhas tarefas";
  public form!: FormGroup;

  constructor() {
    this.todos.push(new Todo(1, "Todo 1", false));
    this.todos.push(new Todo(2, "Todo 2", false));
    this.todos.push(new Todo(3, "Todo 3", true));
  }

  alterarTitulo(){
    this.titulo = "Titulo alterado";
  }

  remove(todo: Todo){
    let index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }
}
