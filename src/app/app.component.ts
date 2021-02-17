import { Component } from '@angular/core';

interface Dimensions {
  x1:number,
  x2:number,
  z1:number,
  z2:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EstimateHeightApp';

  knownLength:number = 0;
  dimensions: Dimensions = {
      "x1":0,
      "x2":0,
      "z1":0,
      "z2":0,
  }

  activeSetter:string = "";
  imageUrl:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ikarbus-FAP_Ik-103F_GSP_Beograd_91.jpg/350px-Ikarbus-FAP_Ik-103F_GSP_Beograd_91.jpg";
  result:number = 0;

  receiveCursorPosition($event):void {
    this.dimensions[this.activeSetter] = $event;
  }

  receiveActiveElement($event):void {
    this.activeSetter = $event;
  }

  calculate():number {

    let length = Math.abs((this.dimensions.x1 - this.dimensions.x2));
    let height = Math.abs((this.dimensions.z1 - this.dimensions.z2));

    let ratio = length / this.knownLength;

    let result = height/ratio;
    this.result = result;
    return result;
  }


}
