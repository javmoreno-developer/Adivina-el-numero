import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  @HostListener("mouseenter") mouseEnter() {
    this.el.nativeElement.style.transition = "all 2s";
    this.el.nativeElement.style.transform = "translateX(80%)";
    /*setInterval(()=> {
      this.el.nativeElement.style.textDecoration = "underline";
    },3000)*/

  }

  @HostListener("mouseleave") mouseLeave() {
    this.el.nativeElement.style.transition = "all 2s";
    this.el.nativeElement.style.transform = "translateX(0%)";
    setInterval(()=> {
      this.el.nativeElement.style.textDecoration = "none";
    },3000)
  }

  constructor(private el: ElementRef) { }

}
