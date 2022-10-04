import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToolDirective]'
})
export class ToolDirectiveDirective {

  @HostListener("mouseenter") mouseEnter() {
   this.el.nativeElement.style.transition = "all 2s";
   //this.el.nativeElement.style.backgroundColor = "red";
   this.el.nativeElement.style.background ="linear-gradient(to right, #ffd791, #c89671, #875e53, #443030, #000000)";
   this.el.nativeElement.style.backgroundSize = "400% 400%";
   //this.el.nativeElement.style.animation = "gradient 5s ease infinite";
  }

  @HostListener("mouseleave") mouseLeave() {
    this.el.nativeElement.style.transition = "all 2s";
    this.el.nativeElement.style.background = "";
   }

  constructor(private el:ElementRef) {}

}
