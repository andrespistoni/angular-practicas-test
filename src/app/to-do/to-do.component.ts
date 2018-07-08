import { Component, OnInit } from '@angular/core';
import { Tarea } from './tarea';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  task: String;
  currentTask: String;
  // tarea: Tarea;
  tareas: Array<Tarea> = [];
  viewTareas: Boolean = false;
  currentTarea: Tarea;
  beforeTarea: Tarea;

  editTarea(item) {
    this.viewTareas = true;
    this.currentTarea = item;
    this.beforeTarea = item;
    this.currentTask = item.tarea;
  }

  deleteTarea(item) {
    // this.viewTareas = true;
    // this.currentTarea = item;
    this.tareas.splice(this.tareas.indexOf(item), 1);
  }
  updateTask(tarea_i) {
    const tareaAux: any = {};
    tareaAux['tarea'] = tarea_i;
    tareaAux['estado'] = '';
    this.tareas[this.tareas.indexOf(this.beforeTarea)] = tareaAux;
    this.viewTareas = false;
    this.currentTask = '';
  }

  saveTask(tarea_i) {
    const tareaAux: any = {};
    tareaAux['tarea'] = tarea_i;
    tareaAux['estado'] = '';
    this.tareas.push(tareaAux);
    this.task = '';
    console.log('Tareas: \n', this.tareas);
  }

  constructor() { }

  ngOnInit() {
  }

}


