import BookmarkListView from './views/bookmarkListView';
import BookmarkAddView from './views/bookmarkAddView';

import {Bookmark} from './models/bookmarks';
import {BookmarkCollection} from './models/bookmarks';

import './ajax-config';

(function(){
  'use strict';

  $(document).ready(function(){
    var bookmarks = new BookmarkCollection();
    bookmarks.fetch();

    var listView = new BookmarkListView({collection: bookmarks});
    $('body').append(listView.el);

    var addView = new BookmarkAddView({collection: bookmarks});
    $('body').prepend(addView.el);
  });
})();
