import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ShowComponent} from './show/show.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    data: {title: 'List of users'}
  },
  {
    path: 'user/add',
    component: AddUserComponent,
    data: {title: 'Add user'}
  },
  {
    path: 'show/:id',
    component: ShowComponent,
    data: {title: 'Show user'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
