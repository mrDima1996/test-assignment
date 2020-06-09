import { props, createAction } from '@ngrx/store';
import { bookmarksListFeaturekey } from '../store-feature-keys.const';
import {Bookmark} from '../../models/bookmark.model';

export const createNewBookmark = createAction(
  `[${bookmarksListFeaturekey}] create new bookmark`,
  props<{
    bookmark: Bookmark;
  }>(),
);

export const deleteBookmark = createAction(
  `[${bookmarksListFeaturekey}] delete this bookmark`,
  props<{
    bookmark: Bookmark;
  }>(),
);

