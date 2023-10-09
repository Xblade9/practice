import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {


  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {

    this.newItemEvent.emit(value);

  }

}
