import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import {IAppState} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private NgRedux: NgRedux<IAppState>){}
  title = 'app works!';

  counter = 0;

  
  
  ngOnInit() {
    
    this.NgRedux.subscribe( () => {
        this.counter = this.NgRedux.getState().counter;
    });
  }
  

  increment() {
    this.NgRedux.dispatch({type: "INCREMENT"});

  }
}
