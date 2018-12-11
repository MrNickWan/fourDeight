import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaPageComponent } from './idea-page/idea-page.component';
import { IdeaPortalUserComponent } from './idea-portal-user/idea-portal-user.component';

const routes: Routes = [
  { path: 'idea-page', component: IdeaPageComponent },
  { path: 'ideas-portal', component: IdeaPortalUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
