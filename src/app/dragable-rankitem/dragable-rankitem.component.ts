import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragable-rankitem',
  templateUrl: './dragable-rankitem.component.html',
  styleUrls: ['./dragable-rankitem.component.css']
})
export class DragableRankitemComponent implements OnInit {
  @Input() dragable = false;
  @Input() deletable = false;
  constructor() { }

  ngOnInit() {
    
  }

}