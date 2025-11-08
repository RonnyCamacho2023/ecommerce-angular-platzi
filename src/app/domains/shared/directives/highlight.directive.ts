import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighligh]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  element = inject(ElementRef);

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
