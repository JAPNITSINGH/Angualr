import { Component, OnInit, Output } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  //template: ``,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  clickMessage = '';
  value_F = '';
  value_L = '';
  value_D = '';
  value_C = '';
   constructor() { }
  onClickListner()
  {
    this.clickMessage='Submitted!'
    //@Output() this.value_F - new EventEmitter();
  }

  onEnter(value_F: string) { this.value_F = value_F; }
  onEnter2(value_L: string) { this.value_L = value_L; }
  onEnter3(value_D: string) { this.value_D = value_D; }
  onEnter4(value_C: string) { this.value_C = value_C; }

  ngOnInit() {
  }

}
