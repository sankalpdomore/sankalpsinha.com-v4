import { Component } from '@angular/core';
//component selector in type script file//
@Component({
  //Selector name is a custom name to identify the component which allows Angular to look for the component by this selector name//
  selector: 'app-root',
  //templateURL is the html file from which this component will fetch the page layout and contents, if any//
  templateUrl: './app.component.html',
  //styleUrls is the css file where we write all the css related to the html file//
  styleUrls: ['./app.component.css']
})
//exporting the component as a class identifier which Angular can use to fetch data from//
export class AppComponent {

}
