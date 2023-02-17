import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../types';
@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent {
  @Input() data!: Todo[];
  @Output() onDelItem = new EventEmitter();
  onDelete(item: Todo) {
    this.onDelItem.emit({ ...item, from: 'dones' });
  }
}
