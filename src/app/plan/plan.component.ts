import { Todo } from './../types';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent {
  @Input() data!: Todo[];
  @Output() onChangeItem = new EventEmitter();
  onEdit(item: Todo) {
    item.edit = !item.edit;
  }
  onDelete(item: Todo, event: any) {
    // stop冒泡
    event.stopPropagation();
    this.onChangeItem.emit({ ...item, from: 'plans', to: 'dones' });
  }

  onEnter(item: Todo, event: any) {
    if (event.keyCode === 13) {
      this.onEdit(item);
    }
  }
}
