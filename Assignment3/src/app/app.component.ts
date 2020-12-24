import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component to component';
  userData=[
    {"id":1,"name":"Anitha"},
    {"id":2,"name":"Ram"},
    {"id":3,"name":"Baby"},
  ];

  data(user: any){
    alert(` User name is : ${user.name}, and address is: ${user.address}`);
    
  }
 
}
