import { Component, OnInit,EventEmitter,Output } from '@angular/core';



@Component({
  selector: 'app-measuring-tool',
  templateUrl: './measuring-tool.component.html',
  styleUrls: ['./measuring-tool.component.css']
})


export class MeasuringToolComponent implements OnInit {

  constructor() { }
  @Output() SetterEvent = new EventEmitter<string>();


  setActiveElement($event,element:string):void {
    this.SetterEvent.emit(element);
  }

  ngOnInit(): void {
  }

}
