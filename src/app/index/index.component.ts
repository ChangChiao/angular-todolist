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
  plans: Todo[] = [genFakeData('睡覺')];
  //done list
  dones: Todo[] = [];
  onChangeItem({ id, value, edit, from, to }: Todo) {
    console.log('todo', id, value, edit);
    //add
    if (!from && !to) {
      this.plans.push({
        id,
        value,
        edit,
      });
    }
    //move plans to dones
    switch (from) {
      case 'plans':
        this.findAndChangeItem(id, this.plans, this.dones);
        break;
      default:
        this.dones.splice(
          this.dones.findIndex((item) => item.id === id),
          1
        );
    }
  }

  findAndChangeItem(id: number, from: Todo[], to: Todo[]): void {
    const index = from.findIndex((item) => item.id === id);
    if (index === -1) {
      return;
    }
    let item: Todo = from.splice(index, 1)[0];
    if (item) {
      to.push(item);
    }
  }

  deleteAll() {
    this.plans = [];
    this.dones = [];
  }
}
