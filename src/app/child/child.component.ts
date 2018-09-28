import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('name') cName:string;
  @Input() cCity:string;

  @Output() sendRecord: EventEmitter<any> = new EventEmitter();
  public sendAllReocrds() {
    let selectedEmployee: any ={
      selectedName: this.cName,
      selecteedCity:this.cCity,
    };
    this.sendRecord.emit(selectedEmployee);//emiting an event
  }
  constructor() { }

  ngOnInit() {
  }

}
