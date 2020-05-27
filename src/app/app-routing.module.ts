import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './components/git-search/git-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: '', pathMatch: 'full'
  // },
  {
    path: '', component: HomePageComponent, //pathMatch: 'full'
    data:{
      title: 'Welcome to the Angular Fundamentals Git Search'
    }
    // children: [
    //   { path: 'search', component: GitSearchComponent }
    // ]
  },
  // {
  //   path: 'repository/:id', component: ''
  // },
  {
    path: 'search', /* pathMatch: 'full' */
    component: GitSearchComponent,
    data: {
      title: 'Git Search',
    },
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
export class AppRoutingModule { }
