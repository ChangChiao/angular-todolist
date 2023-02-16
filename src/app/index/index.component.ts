import { genFakeData } from './../types';
import { Component } from '@angular/core';
import { Todo } from '../types';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  //plans list
  plans: Todo[] = [ genFakeData('睡覺')];
  //done list
  dones: Todo[] = [];
  onChangeItem({ id, value, edit, from, to }: Todo) {
    console.log('todo', id, value, edit);
    if(!from && !to){
      this.plans.push({
        id, value, edit,
      })
    }
  } 
}
