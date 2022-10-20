import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public todos: any[] = []; // any -> tipo generico, aceita qualquer tipo
  public titulo: String = "Minhas tarefas";

  constructor() {
    this.todos.push("Tarefa 1");
    this.todos.push("Tarefa 2");
    this.todos.push("Tarefa 3");
    this.todos.push(2022);
    this.todos.push({ message: "teste" });
    this.todos.push(new Date());
  }

  alterarTitulo(){
    this.titulo = "Titulo alterado";
  }
}
