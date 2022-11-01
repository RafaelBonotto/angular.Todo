import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public todos: Todo[] = []; 
  public titulo: String = "Minhas tarefas";
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        title: ['', Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.required,
        ])]
      });
  }

  load(){
    const data = localStorage.getItem('todos');
    this.todos = JSON.parse(data?.toString());
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  clear(){
    this.form.reset();
  }

  add(){
    const title = this.form.controls['title'].value; // captura o titulo da tela
    const id = this.todos.length + 1; // lista de tarefa + 1 (cria um id para tarefa)
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
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
