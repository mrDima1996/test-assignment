import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BookmarksWrapperComponent} from './containers/bookmarks-wrapper/bookmarks-wrapper.component';
import {NewBookmarkComponent} from './containers/new-bookmark/new-bookmark.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewBookmarkComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: BookmarksWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule {
}
