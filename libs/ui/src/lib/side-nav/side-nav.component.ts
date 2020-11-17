import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'book-store-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent{
  @Input() cartLength:number;
  constructor() { }

} 
