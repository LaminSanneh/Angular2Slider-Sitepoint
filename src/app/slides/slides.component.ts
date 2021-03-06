import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'slides',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.css']
})
export class SlidesComponent implements OnInit {
  slidesInnerMarginLeft;
  singleSlideWidth;
  slidesInnerWidth;
  @Input()
  navNumber = 1;
  @Input()
  elementsPerSlide = 1;
  element;
  slides;

  constructor(element: ElementRef) {
    this.element = element;
    this.slides = [
      {src: "/img/slide1.png"},
      {src: "/img/slide2.png"},
      {src: "/img/slide3.png"},
      {src: "/img/slide4.png"},
      {src: "/img/slide5.png"}
    ]
  }

  ngOnInit() { }

  ngAfterViewInit() {
    window.addEventListener("resize", () => {
      this.setInitialValues();
    });
    this.setInitialValues();
  }

  setInitialValues() {
    this.singleSlideWidth = this.element.nativeElement.querySelector(".slides").clientWidth/this.elementsPerSlide;    
    this.slidesInnerMarginLeft = (this.navNumber - 1) * this.singleSlideWidth;
    this.slidesInnerWidth = this.slides.length * this.singleSlideWidth;
  }

  goToNavNumber(number) {
    this.navNumber = number;
    this.slidesInnerMarginLeft = (this.navNumber - 1) * this.singleSlideWidth;
  }

  goToNext() {
    if (this.navNumber < 5) {
      this.goToNavNumber(this.navNumber + 1);
    }
  }

  goToPrevious() {
    if (this.navNumber > 1) {
      this.goToNavNumber(this.navNumber - 1);
    }
  }

  setSlidesInnerStyles() {
    return {
      'margin-left': '-' + this.slidesInnerMarginLeft + 'px',
      'width': this.slidesInnerWidth + 'px'
    }
  }

  setSlideStyles() {
    return {
      'width': this.singleSlideWidth + 'px'
    }
  }
}
