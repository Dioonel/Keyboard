import { LowerCasePipe } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  kps = 0;

  constructor(){ }

  ngOnInit() {
    let container = document.getElementById('container');
    container?.focus();
  }

  tap(e: Event){
    let event = e as KeyboardEvent;
    if (event.repeat) { return }
    if (event.code === 'Tab') e.preventDefault()
    else if (event.code === 'AltLeft')  e.preventDefault()

    let element = document.getElementById(event.code);
    if(element){
      this.kps++;
      setTimeout(() => { this.kps-- }, 1000);
      element.classList.add('active');
    }
  }

  untap(e: Event){
    let event = e as KeyboardEvent;
    if (event.code === 'Tab') e.preventDefault()
    else if (event.code === 'AltLeft')  e.preventDefault()

    let element = document.getElementById(event.code);
    if(element){
      element.classList.remove('active');
    }
  }
}

