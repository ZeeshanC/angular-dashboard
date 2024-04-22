import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCanvasDimension]'
})
export class CanvasDimensionDirective implements AfterViewInit, OnDestroy {
  private resizeObserver: ResizeObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setCanvasDimensions();

    // Listen for parent container resize
    this.resizeObserver = new ResizeObserver(() => {
      this.setCanvasDimensions();
    });

    const parent = this.el.nativeElement.parentElement;
    if (parent) {
      this.resizeObserver.observe(parent);
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private setCanvasDimensions(): void {
    const canvas: HTMLCanvasElement = this.el.nativeElement;
    const parent = canvas.parentElement;

    if (parent) {
      this.renderer.setStyle(canvas, 'width', parent.offsetWidth + 'px');
      this.renderer.setStyle(canvas, 'height', parent.offsetHeight + 'px');
    }
  }

}
