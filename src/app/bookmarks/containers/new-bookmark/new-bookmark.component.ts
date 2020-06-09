import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

import { BookmarksGroupType } from '../../models/group.enum';
import {Bookmark} from '../../models/bookmark.model';

@Component({
  selector: 'app-new-bookmark',
  templateUrl: './new-bookmark.component.html',
  styleUrls: ['./new-bookmark.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewBookmarkComponent implements OnInit {
  public bookmarksGroupType = BookmarksGroupType;
  public bookmarkForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.AggregatedBookmarksState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookmarkForm = this.fb.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
      group: [BookmarksGroupType.work, [Validators.required]],
    });
  }

  onSubmit() {
    const newBookmark: Bookmark = {
      id: Date.now(),
      ...this.bookmarkForm.value
    };
    this.store.dispatch(fromStore.createNewBookmark({bookmark: newBookmark}));
    this.router.navigate(['/bookmarks']);
  }

}
