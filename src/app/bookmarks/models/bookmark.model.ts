import {BookmarksGroupType} from './group.enum';

export interface Bookmark {
  id: number;
  name: string;
  url: string;
  group: BookmarksGroupType;
}
