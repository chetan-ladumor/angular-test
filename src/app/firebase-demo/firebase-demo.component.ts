import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-firebase-demo',
  templateUrl: './firebase-demo.component.html',
  styleUrls: ['./firebase-demo.component.css']
})
export class FirebaseDemoComponent implements OnInit,OnDestroy {

  courses: any[];
  subscription: Subscription;

  courses$;
  course$;
  author$;
  newAuthor$;

  customersRefList$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    
    // this.subscription= db.list('/courses').valueChanges()
    //                    .subscribe(courses =>{
    //                       this.courses = courses;
    //                       console.log(this.courses);
    //                     })

    this.courses$=db.list('/courses').valueChanges();

    this.course$=db.object('/courses/8').valueChanges();
    

    this.newAuthor$ =db.object('/courses/authors/1').valueChanges();

    ///////////////////////////////////////////

    this.customersRefList$ = db.list('/courses').valueChanges();
    
    // this.customersRefList = db.list('/courses/customers/1')
    //                       .snapshotChanges()
    //                       .subscribe(item=>{
    //                         this.customersRefList = [];

    //                       })
    
  
    
    

    }

    add(newCourseRef: HTMLInputElement) {
      //this.customersRefList.push(newCourseRef);
      this.db.list('/courses').push(newCourseRef.value);
      this.db.list('/courses').push({
        name:newCourseRef.value,
        price:'150$',
        isLive: true,
        sections: [
          {title:'components','desc':'add any desc'},
          {title:'components1','desc':'add any desc1'}
        ]
      });
      newCourseRef.value="";
    }

    update(course) {
      this.db.object('/courses');
    }

  ngOnInit() {
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }

}
