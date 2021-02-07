import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDashboardComponent } from '../../components/author/author-dashboard/author-dashboard.component';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorDeleteComponent } from 'src/app/components/author/author-delete/author-delete.component';
import { AuthorDetailsComponent } from 'src/app/components/author/author-details/author-details.component';
import { AuthorListComponent } from 'src/app/components/author/author-list/author-list.component';
import { CreateAuthorComponent } from 'src/app/components/author/create-author/create-author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AuthorDashboardComponent,
    CreateAuthorComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    AuthorDeleteComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [AuthorRoutingModule]
})
export class AuthorModule {}
