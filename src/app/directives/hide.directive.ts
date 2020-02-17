import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[hide]"
})
export class HideDirective implements OnChanges {
  @Input() hide: boolean;
  @Input() display: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnChanges() {
    if (this.hide) {
      this.renderer.setStyle(this.elRef.nativeElement, "display", "none");
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, "display", this.display);
    }
  }
}
