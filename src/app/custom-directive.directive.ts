import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})

// We are making a Attribute directive
export class CustomDirectiveDirective {

  // @Input() backgroundColor: string = '' ;

  //! W R O N G  
  // constructor(private element:ElementRef ) { 
  //   this.element.nativeElement.style.backgroundColor = this.backgroundColor 
  // }

  //? Right way 
  // constructor(private element: ElementRef) {
  //   // Property initialization should be done in ngOnInit lifecycle hook instead.
  // }

  /*
  !Angular input bindings are set after the class is instantiated(when the class is instantiated, first of all the constructor is called and then @Input binding variables are set), which means they are not available in the constructor. 
  !However, they are available by the time the ngOnInit lifecycle hook is called, making it a suitable place for initialization logic that relies on input values.
  */
  // ngOnInit() {
  //   // Now it's safe to use the input property because it's been initialized by Angular.
  //   this.element.nativeElement.style.backgroundColor = this.backgroundColor || 'orange';
  // }

  //? Or ( we can use 'set' keyword in front of a @Input binding variable called 'backgroundColor'). So whenever we tries to set the value to the 'backgroundColor' variable, it will call the 'set' and sets the value. 
  /*
  Cons -> 1) we cannot access the child component elements inside this backgroundColor method because may be at that time they might not get instantiated. We can get error If the setter tries to manipulate child components or elements that are not yet available in the DOM.
  */
  //  @Input() set backgroundColor(color:string){
  //   this.element.nativeElement.style.backgroundColor = color;
  //  }


   /*
   if your setter function tries to access a ViewChild or manipulate DOM elements directly, doing so in ngOnInit or within the setter itself might lead to errors because these elements are not yet available. That's why for complex DOM manipulations or when you need to interact with child components or directives, you should use the ngAfterViewInit lifecycle hook, which ensures that the component's view has been fully initialized and is ready for direct DOM interactions.

   */


  private bgColor!: string;

  constructor(private element: ElementRef) {}

  // We are setting the background color whenever the property 
 

  @Input('appCustomDirective') set backgroundColor(color: string) { // we can write a string inside the @Input decorator which signifies the name corresponding to which it execute the set method.
    this.bgColor = color;
    this.setStyle(color);
  }
  // @Input() set backgroundColor(color: string) {
  //   this.bgColor = color;
  //   this.setStyle(color);
  // }

  ngAfterViewInit() {
    // Now it's safe to do complex DOM manipulation
    this.setStyle(this.bgColor);
  }

  private setStyle(color: string) {
    if (this.element.nativeElement) {
      this.element.nativeElement.style.backgroundColor = color || 'orange';
    }
  }


}
