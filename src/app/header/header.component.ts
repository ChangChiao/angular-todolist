import { Component, EventEmitter, Output } from '@angular/core';
import { genFakeData } from '../types';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() onChangeItem = new EventEmitter();
  input = '';

  onEnter(e: any) {
    if (e.keyCode === 13 && this.input.trim().length) {
      console.log(this.input);
      this.onChangeItem.emit(genFakeData(this.input))
      this.input = ''
    }
  }
}
