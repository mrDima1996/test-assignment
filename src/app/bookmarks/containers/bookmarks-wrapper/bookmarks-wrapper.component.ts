import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {Bookmark} from '../../models/bookmark.model';
import {BookmarksGroupType} from '../../models/group.enum';

@Component({
  selector: 'app-bookmarks-wrapper',
  templateUrl: './bookmarks-wrapper.component.html',
  styleUrls: ['./bookmarks-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarksWrapperComponent implements OnInit {
  public currentGroup;
  public bookmarksGroupType = BookmarksGroupType;
  public bookmarks$: Observable<Bookmark[]>;

  constructor(
    private store: Store<fromStore.AggregatedBookmarksState>,
  ) { }

  ngOnInit(): void {
    this.bookmarks$ = this.store.select(fromStore.selectBookmarksList);
  }

  bookmarksTrackByFunction(bookmark: Bookmark) {
    return bookmark.id;
  }

  deleteThisBookmark(bookmark: Bookmark) {
    this.store.dispatch(fromStore.deleteBookmark({bookmark}));
  }

  selectGroup(group) {
    this.currentGroup = group;
  }

}
