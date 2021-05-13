//Angular ships with a component decorator. To use it in a file, always import the component decorator by adding import { Component } from '@angular/core';//
import { Component } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel';
//To turn the type-script class into a component that angular understands, we add a decorator to the class by adding @component(). @Component here is a decorator//
//Create a new component by creating a type-script class by typing export class {class_name}//
@Component({
  //Selector name is a custom name to identify the component which allows Angular to look for the component by this selector name//
  selector: 'component-landing-intro',
  //templateURL is the html file from which this component will fetch the page layout and contents, if any//
  templateUrl: './landing-intro.component.html',
  //styleUrls is the css file where we write all the css related to the html file//
  styleUrls: ['./landing-intro.component.css']
})
//exporting the component as a class identifier which Angular can use to fetch data from//
export class ExportClassLandingIntroComponent {

}
