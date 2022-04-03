import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask():Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
}