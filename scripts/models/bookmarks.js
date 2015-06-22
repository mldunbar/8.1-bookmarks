var Bookmark = Backbone.Model.extend({
  idAttribute: 'id',

  defaults: function(){
    return {
      title: '',
      url: '',
    };
  }
});

var BookmarkCollection = Backbone.Collection.extend({
  model: Bookmark
});

export default {Bookmark, BookmarkCollection};
