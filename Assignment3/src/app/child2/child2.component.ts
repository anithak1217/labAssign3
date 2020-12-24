import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 @Output() eventEmitter=new EventEmitter();
 
  user={
"name":"Anitha","address":"Ap"
  };
  display(){
    this.eventEmitter.emit(this.user);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
