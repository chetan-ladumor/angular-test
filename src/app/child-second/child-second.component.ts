import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.css']
})
export class ChildSecondComponent implements OnInit {

  @Input() childData:any[];

  constructor() { }

  ngOnInit() {
  }

}
