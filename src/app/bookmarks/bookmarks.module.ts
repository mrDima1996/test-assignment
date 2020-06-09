import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BookmarksRoutingModule} from './bookmarks-routing.module';
import {BookmarksStoreModule} from './store/bookmarks-store.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {BookmarksWrapperComponent} from './containers/bookmarks-wrapper/bookmarks-wrapper.component';
import {BookmarkListItemComponent} from './components/bookmark-list-item/bookmark-list-item.component';
import {NewBookmarkComponent} from './containers/new-bookmark/new-bookmark.component';
import {BookmarkGroupFilterPipe} from './pipes/bookmark-group-filter.pipe';
import {ObjToArrayPipe} from './pipes/obj-to-array.pipe';

@NgModule({
  declarations: [
    BookmarksWrapperComponent,
    BookmarkListItemComponent,
    NewBookmarkComponent,
    BookmarkGroupFilterPipe,
    ObjToArrayPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookmarksRoutingModule,
    BookmarksStoreModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: []
})
export class BookmarksModule {
}
