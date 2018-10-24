import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from 'src/app/chat/chat.component';
import { BeginComponent } from 'src/app/begin/begin.component';
import { AboutComponent } from 'src/app/about/about.component';

const appRoutes: Routes = [
  { path: 'home', component: BeginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
