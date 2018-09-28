import { Component} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods=[
    {id:1,name:'email'},
    {id:2,name:'phone'}
  ]

  log(name) {
    console.log(name);
  }

  submit(f) {
    console.log(f);
  }

}
