require.register("ajax-config", function(exports, require, module){
  'use strict';

$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  if (options.url.match(/api.parse.com/)) {
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'GbTawCEmyJeW6nEbBtXGbNqrkyLGYsQanMrgFZH6';
    options.headers['X-Parse-REST-API-Key'] = '2VfTfew5XdZY6X4OGdErIjGtEwDcb2rfEKsNUuVt';
  }
});
  
});

require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsBookmarkListView = require('./views/bookmarkListView');

var _viewsBookmarkListView2 = _interopRequireDefault(_viewsBookmarkListView);

var _viewsBookmarkAddView = require('./views/bookmarkAddView');

var _viewsBookmarkAddView2 = _interopRequireDefault(_viewsBookmarkAddView);

var _modelsBookmarks = require('./models/bookmarks');

require('./ajax-config');

(function () {
  'use strict';

  $(document).ready(function () {
    var bookmarks = new _modelsBookmarks.BookmarkCollection();
    bookmarks.fetch();

    var listView = new _viewsBookmarkListView2['default']({ collection: bookmarks });
    $('body').append(listView.el);

    var addView = new _viewsBookmarkAddView2['default']({ collection: bookmarks });
    $('body').prepend(addView.el);
  });
})();
  
});

require.register("models/bookmarks", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Bookmark = Backbone.Model.extend({
  idAttribute: 'objectId',

  defaults: {
    title: '',
    url: ''
  }

});

var BookmarkCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/Bookmark',
  model: Bookmark,

  parse: function parse(response) {
    return response.results;
  }
});

exports['default'] = { Bookmark: Bookmark, BookmarkCollection: BookmarkCollection };
module.exports = exports['default'];
  
});

require.register("views/bookmarkAddView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({

  template: JST['bookmark-add'],

  initialize: function initialize() {
    this.render();
  },

  events: {
    'click button': 'bookmarkAdd',
    'submit .bookmark-add-form': 'saveBookmark',
    'click .bookmark-reset': 'resetBookmark'
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  bookmarkAdd: function bookmarkAdd() {
    this.$('.bookmark-add-form').toggleClass('hidden');
  },

  saveBookmark: function saveBookmark(e) {
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.collection.create({
      title: title,
      url: url
    });
    this.$('.bookmark-edit-form').hide();
  },

  resetBookmark: function resetBookmark() {
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
  }

});
module.exports = exports['default'];
  
});

require.register("views/bookmarkItemView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST['bookmark-item'],

  tagName: 'li',

  events: {
    'click .bookmark-edit-button': 'editBookmark',
    'submit .bookmark-edit-form': 'saveBookmark',
    'click .bookmark-reset': 'resetBookmark',
    'click .bookmark-delete': 'deleteBookmark'
  },

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  editBookmark: function editBookmark(e) {
    this.$('.bookmark-edit-form').toggleClass('hidden');
  },

  saveBookmark: function saveBookmark(e) {
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.model.save({
      title: title,
      url: url
    });
    this.$('.bookmark-edit-form').hide();
  },

  resetBookmark: function resetBookmark() {
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
  },

  deleteBookmark: function deleteBookmark(e) {
    e.preventDefault();
    this.model.destroy();
  }

});
module.exports = exports['default'];
  
});

require.register("views/bookmarkListView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bookmarkItemView = require('./bookmarkItemView');

var _bookmarkItemView2 = _interopRequireDefault(_bookmarkItemView);

exports['default'] = Backbone.View.extend({

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      var view = new _bookmarkItemView2['default']({
        model: child
      });
      this.$el.append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }

});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map