import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  data: User[] = [];
  constructor( private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
        this.data = res;
      }, err => {
        console.log(err);
      });
  }

}
