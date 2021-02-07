import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthorDashboardComponent } from 'src/app/components/author/author-dashboard/author-dashboard.component';

const routes: Route[] = [{ path: '', component: AuthorDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule {}
