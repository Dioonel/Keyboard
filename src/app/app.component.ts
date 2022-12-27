import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}

  ngOnInit() {
    let container = document.getElementById('container');
    container?.focus();
  }

  tap(e: Event){
    let event = e as KeyboardEvent;
    console.log(event.code);
    let element = document.getElementById(event.code);
    if(element){
      element.classList.add('active');
    }
  }

  untap(e: Event){
    let event = e as KeyboardEvent;
    console.log(event.code);
    let element = document.getElementById(event.code);
    if(element){
      element.classList.remove('active');
    }
  }
}

