(function(){
  'use strict';

  $(document).ready(function(){
    var bookmarks = new Backbone.Collection([
      {title: "what", url: "http://www.google.com"},
      {title: "who", url:"http://www.google.com"},
      {title: "where", url: "http://www.google.com"}
    ]);

    $('body').prepend(JST.index(bookmarks.toJSON()));
  });
})();
