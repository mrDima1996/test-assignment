import { Pipe, PipeTransform } from '@angular/core';
import {Bookmark} from '../models/bookmark.model';

@Pipe({
  name: 'filterGroup',
})
export class BookmarkGroupFilterPipe implements PipeTransform {
  transform(value: Bookmark[], groupName: string): Bookmark[] {
    if (!groupName) {
      return value;
    }
    return value.filter((bookmark: Bookmark) => bookmark.group === groupName);
  }
}
