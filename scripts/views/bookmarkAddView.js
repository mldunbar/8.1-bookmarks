export default Backbone.View.extend({

  template: JST['bookmark-add'],

  initialize: function(){
    this.render()
  },

  events: {
    'click button': 'bookmarkAdd',
    'submit .bookmark-add-form': 'saveBookmark',
    'click .bookmark-reset': 'resetBookmark'
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  bookmarkAdd: function(){
    this.$('.bookmark-add-form').toggleClass('hidden');
  },

  saveBookmark: function(e){
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.collection.create({
      title: title,
      url: url
    });
    this.$('.bookmark-edit-form').hide();
  },

  resetBookmark: function(){
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
  }


});
