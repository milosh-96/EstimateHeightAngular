import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-image-preview-box',
  templateUrl: './image-preview-box.component.html',
  styleUrls: ['./image-preview-box.component.css']
})
export class ImagePreviewBoxComponent implements OnInit {

  constructor() { }
  @Output() CursorPositionEvent = new EventEmitter<string>();
  @Input() activeSetter: string;

  imageUrl:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ikarbus-FAP_Ik-103F_GSP_Beograd_91.jpg/350px-Ikarbus-FAP_Ik-103F_GSP_Beograd_91.jpg";


  setCursorPosition($event): void  {
    if(this.activeSetter == "x1" || this.activeSetter == "x2") {
      this.CursorPositionEvent.emit($event.clientX);
    }
    else if(this.activeSetter == "z1" || this.activeSetter == "z2") {
      this.CursorPositionEvent.emit($event.clientY);
    }
  }


  ngOnInit(): void {
  }

}

