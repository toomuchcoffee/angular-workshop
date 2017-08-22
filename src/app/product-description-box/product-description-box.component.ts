import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'idealo-product-description-box',
  templateUrl: './product-description-box.component.html',
  styleUrls: ['./product-description-box.component.css']
})
export class ProductDescriptionBoxComponent implements OnInit {
  shouldHide: boolean = true;

  @Input() textLabel: string;

  constructor() { }

  ngOnInit() {
  }

  toggleHide(event: MouseEvent) {
    if (event.shiftKey) {
      this.shouldHide = !this.shouldHide;
    } else {
      alert("Press shift!")
    }
  }
}
