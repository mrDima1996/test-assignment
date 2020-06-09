import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as reducers from './reducers';

@NgModule({
  declarations: [
    ],
  imports: [
    StoreModule.forFeature(reducers.featureKey, reducers.AggregatedBookmarksReducer)
  ],
  providers: [],
  bootstrap: []
})
export class BookmarksStoreModule { }
