import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostDashboardComponent } from 'src/app/components/posts/post-dashboard/post-dashboard.component';

const routes: Route[] = [
  {
    path: '',
    component: PostDashboardComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}
