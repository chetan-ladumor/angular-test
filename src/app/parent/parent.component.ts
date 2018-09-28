import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public EmployeeRecords: any =[
    {name:'chetan',city:'surat'},
    {name:'alpesh',city:'pune'},
  ];

  public myParentArray: any =[
    {name:'chetan',city:'surat'},
    {name:'alpesh',city:'pune'},
  ];

  public selectedEmployeedata: any={
    
  }
  public getRecord(data: any): void {
    this.selectedEmployeedata = data;
  }

  ngOnInit() {
  }

}
