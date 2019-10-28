import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  res;

  constructor(private activeRouter: ActivatedRoute,
              private router: Router,
              private api: ApiService,
  ) {
  }

  ngOnInit() {
    this.getDetail(this.activeRouter.snapshot.params.id);
  }

  getDetail(id) {
    this.api.getUser(id)
      .subscribe(data => {
        this.res = data;
        console.log(this.res);
      });
  }
}
