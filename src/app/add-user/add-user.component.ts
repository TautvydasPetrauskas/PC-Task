import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService,
  ) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])],

    });
  }

  addUser() {
    const loadUser = {
      title: this.userForm.controls.title.value,
      body: this.userForm.controls.body.value,
    };

    this.router.navigate([`/`]);
  }

}
