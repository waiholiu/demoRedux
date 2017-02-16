import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import {IAppState} from './../store';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private NgRedux: NgRedux<IAppState>){}

  secondCounter = 3;

  ngOnInit() {

    this.NgRedux.subscribe( () => {
        this.secondCounter = this.NgRedux.getState().counter;
    });
  }

  decrement() {

    this.NgRedux.dispatch({type: "DECREMENT", amount: 4});

  }

}
