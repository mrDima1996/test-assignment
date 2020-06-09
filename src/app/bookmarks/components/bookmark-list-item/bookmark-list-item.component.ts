import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Bookmark} from '../../models/bookmark.model';

@Component({
  selector: 'app-bookmark-list-item',
  templateUrl: './bookmark-list-item.component.html',
  styleUrls: ['./bookmark-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarkListItemComponent {

  @Input() bookmark: Bookmark;
  @Output() deleteThisBookmark: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();

  deleteBookmark() {
    this.deleteThisBookmark.emit(this.bookmark);
  }
}
