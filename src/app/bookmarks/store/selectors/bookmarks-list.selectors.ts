import { createSelector } from '@ngrx/store';

import {selectAggregatedBookmarksState, TotalBookmarksState} from '../reducers';
import {bookmarksListFeaturekey} from '../store-feature-keys.const';
import {BookmarksListState} from '../reducers/bookmarks-list.reducer';

export const selectBooksmarksListState = createSelector(
  selectAggregatedBookmarksState,
  (state: TotalBookmarksState) => state[bookmarksListFeaturekey],
);

export const selectBookmarksList = createSelector(
  selectBooksmarksListState,
  (state: BookmarksListState) => state.bookmarks
);

