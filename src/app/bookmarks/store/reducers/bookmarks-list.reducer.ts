import {Bookmark} from '../../models/bookmark.model';
import {Action} from '@ngrx/store';
import * as fromActions from '../actions';
import {BookmarksGroupType} from '../../models/group.enum';

export interface BookmarksListState {
  bookmarks: Bookmark[];
}

export const BookmarksListInitialState = {
  bookmarks: [
    {
      id: 1,
      name: 'sdfsdf',
      url: '234234',
      group: BookmarksGroupType.work
    },
    {
      id: 2,
      name: '234',
      url: 'fghfgh',
      group: BookmarksGroupType.leisure
    },
  ]
};

export const BookmarksListReducer = (state = BookmarksListInitialState, action: Action | any): BookmarksListState => {
  switch (action.type) {

    case fromActions.createNewBookmark.type: {
      const newBookmarksList = [...state.bookmarks];
      newBookmarksList.push(action.bookmark);
      return {
        ...state,
        bookmarks: newBookmarksList
      };
    }

    case fromActions.deleteBookmark.type: {
      const newBookmarksList = state.bookmarks.filter((bookmark: Bookmark) => bookmark.id !== action.bookmark.id);
      return {
        ...state,
        bookmarks: newBookmarksList
      };
    }
    default:
      return state;
  }
};
