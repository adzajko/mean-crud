import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./modules/author/author.module').then(
        module => module.AuthorModule
      )
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/post/post.module').then(module => module.PostModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
