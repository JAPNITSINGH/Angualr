import { Component, OnInit, Input } from '@angular/core';
import {UserComponent} from 'src/app/user/user.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() FirstName : string
  constructor() { }

  ngOnInit() {
  }

}
