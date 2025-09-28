import { Routes } from '@angular/router';
import { Users } from './users/users';
import { Details } from './details/details';
import { Posts } from './posts/posts';

export const routes: Routes = [
  { path: '', component: Users },
  { path: 'details/:id', component: Details },
  { path: 'posts', component: Posts },
];
