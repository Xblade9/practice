import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() count: number = 0;

  @Output() countChng: EventEmitter<any> = new EventEmitter<any>();


  countChnger(): void {
    this.count++;
    this.countChng.emit(this.count)
  }
}
