import { Component } from '@angular/core';
// see: https://stackoverflow.com/a/46745059/1016343
@Component({
  selector: 'my-app',
   template: `
   <div class="form-group">
        <input type="file" (change)="onFileSelect($event.target)" name="myfile">
   </div>
  `,
  styles: [``]
})
export class AppComponent  implements OnInit {

    csvContent: string;

    constructor(){}
    ngOnInit(){
    }

    onFileLoad(fileLoadedEvent) {
      const textFromFileLoaded = fileLoadedEvent.target.result;              
      this.csvContent = textFromFileLoaded;     
      alert(this.csvContent);
    }

    onFileSelect(input: HTMLInputElement) {

      const files = input.files;
      var content = this.csvContent;

     if (files && files.length) {
         /*
          console.log("Filename: " + files[0].name);
          console.log("Type: " + files[0].type);
          console.log("Size: " + files[0].size + " bytes");
          */

          const fileToRead = files[0];

          const fileReader = new FileReader();
          fileReader.onload = this.onFileLoad;

          fileReader.readAsText(fileToRead, "UTF-8");
     }

    }
}
