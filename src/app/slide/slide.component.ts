import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: 'slide.component.html',
  styleUrls: ['slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input()
  slide;
  
  constructor() { }

  ngOnInit() {
  }

}
