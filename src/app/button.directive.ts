import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective implements OnInit{
  @Input() appButton!:string;

  constructor(private el: ElementRef, private renderer:Renderer2) {
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
    this.el.nativeElement.style.marginTop = "10px";
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setBoxShadow('0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.19)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBoxShadow(null);
  }

  private setBoxShadow(value: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', value);
  }

}
