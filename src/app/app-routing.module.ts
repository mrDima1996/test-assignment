import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'bookmarks',
    loadChildren: () => import('./bookmarks/bookmarks.module').then(mod => mod.BookmarksModule)
  },
  {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'bookmarks'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
