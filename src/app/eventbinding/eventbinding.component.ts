import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements AfterViewInit {

  eventInfo: string = '';

  inputData: string = '';

  @ViewChild('data') dataInput?: ElementRef;

  handleClick(event: Event): string {

    return this.eventInfo = `Event type: ${event.type}, Timestamp: ${event.timeStamp}}`;
  }

  ngAfterViewInit(): void {
    this.inputEventData();
  }

  inputEventData(): string {

    return this.inputData = this.dataInput?.nativeElement.value;
  }

}
