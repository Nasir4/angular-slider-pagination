import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {
    //  this.element.nativeElement.style.backgroundColor = 'red';
  
   }

   @Input('appClass') set classNames(classObj){
      for(let key in classObj){
        if(classObj[key]){
          this.element.nativeElement.classList.add(key);
        }else{
          this.element.nativeElement.classList.remove(key);
        }
      }
      
   }

}