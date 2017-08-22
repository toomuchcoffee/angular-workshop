import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'idealo-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.css']
})
export class ProductTitleComponent implements OnInit {

  @Output() titleClicked = new EventEmitter<string>();

  clickTitle(){
    this.titleClicked.emit("title was clicked!");
  }

  constructor() { }

  ngOnInit() {
  }

}
