import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from '../../components/posts/post-dashboard/post-dashboard.component';
import { PostDeleteComponent } from '../../components/posts/post-delete/post-delete.component';
import { PostDetailsComponent } from '../../components/posts/post-details/post-details.component';
import { PostListComponent } from '../../components/posts/post-list/post-list.component';
import { PostCreateComponent } from '../../components/posts/post-create/post-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [
    PostDashboardComponent,
    PostDeleteComponent,
    PostDetailsComponent,
    PostListComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule
  ],
  exports: [PostRoutingModule]
})
export class PostModule {}
