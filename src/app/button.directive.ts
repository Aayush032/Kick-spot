import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective implements OnInit{
  @Input() appButton!:string;

  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = '#51AD19';
    this.el.nativeElement.textContent = this.appButton;
    this.el.nativeElement.style.width = '250px';
    this.el.nativeElement.style.height = '50px';
    this.el.nativeElement.style.borderRadius = '12px';
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.fontSize = '22px';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.marginTop = "20px"
  }

}
