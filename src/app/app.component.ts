import { Component,SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  title = 'Estimate Height of Builidngs and other objects';

  /**
   *
   */
  constructor(private sanitizer: DomSanitizer) {
  }

  knownLength:number = 0;
  dimensions: Dimensions = {
      "x1":0,
      "x2":0,
      "z1":0,
      "z2":0,
  }

  activeSetter:string = "";

  help():string {
    switch(this.activeSetter) {
      case "x1":
        return "Set width/length point 1";
        break;
      case "x2":
        return "Set width/length point 2";
        break;
      case "z1":
        return "Set height point 1";
        break;
      case "z2":
        return "Set height point 2";
        break;
    }
    return "";
  }
  imageUrl:any = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ikarbus-FAP_Ik-103F_GSP_Beograd_91.jpg/350px-Ikarbus-FAP_Ik-103F_GSP_Beograd_91.jpg";
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



    pasteImage($event) {
      const clipboardItems = $event.clipboardData.items;
          const items = [].slice
              .call(clipboardItems)
              .filter(function(item) {
                  // Filter the image items only
                  return item.type.indexOf('image') !== -1;
              });
          if (items.length === 0) {
              return;
          }

          const item = items[0];
          // Get the blob of image
          const blob = item.getAsFile();

          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));

    }
}


