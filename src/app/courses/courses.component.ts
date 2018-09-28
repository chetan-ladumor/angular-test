import { Component, OnInit } from '@angular/core';
import { CoursesSerive } from 'src/app/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  service_courses;
  constructor(service:CoursesSerive) { 
    //let service=new CoursesSerive(); instead of creatig a instance of servies we can ask angulat to do it for us
    this.service_courses=service.getCourses();
  }

  title="List of Courses";
  pipedata="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae porro exercitationem reprehenderit, at saepe, possimus nobis veniam molestiae perspiciatis ipsa accusamus qui dignissimos eum laudantium voluptatem vel quo ea.";
  getTitle() {
    return this.title;
  }

  courses=["Course1","Course2","Course3"];
  
  onClick($event) {
    console.log("Button was clicked.",$event);
  }
  pTagClicik($event) {
    $event.stopPropagation();
    console.log("p tag cluicked");
  }
  divClicked() {
    console.log("Div clicked");
  }
  // onKeyup($event) {
  //   if($event.keyCode === 13)
  //   {
  //     console.log("Eneter key pressed");
  //   }
  // }

  onKeyup() {
   
      console.log("Eneter key pressed");
    
  }

  onKeyUptempateVariable(email) {
    console.log(email);
  }

  email1="ladumor@yahoo.com";

  onkeyuptwoway() {
    console.log(this.email1)
  }
 
   email2="alpo@yahoo.com";
  onkeyuptwoway2() {
    console.log(this.email2);
  }


  ngOnInit() {
  }

}
