import { bookmarksListFeaturekey } from '../store-feature-keys.const';
import { Action, createFeatureSelector, combineReducers } from '@ngrx/store';
import * as fromBookmarksList from './bookmarks-list.reducer';

export const featureKey = 'bookmarks';

export interface TotalBookmarksState {
  [bookmarksListFeaturekey]: fromBookmarksList.BookmarksListState;
}

export interface AggregatedBookmarksState {
  [featureKey]: TotalBookmarksState;
}

export function AggregatedBookmarksReducer(state: TotalBookmarksState | undefined, action: Action) {
  return combineReducers({
    [bookmarksListFeaturekey]: fromBookmarksList.BookmarksListReducer,
  })(state, action);
}

export const selectAggregatedBookmarksState = createFeatureSelector<AggregatedBookmarksState, TotalBookmarksState>(featureKey);
