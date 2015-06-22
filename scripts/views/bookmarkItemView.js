export default Backbone.View.extend({
  template: JST['bookmark-item'],

  tagName: 'li',

  events: {
    'click .bookmark-edit-button': 'editBookmark',
    'submit .bookmark-edit-form': 'saveBookmark',
    'click .bookmark-reset': 'resetBookmark',
    'click .bookmark-delete': 'deleteBookmark'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  editBookmark: function(e){
    this.$('.bookmark-edit-form').toggleClass('hidden');
  },

  saveBookmark: function(e){
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.model.save({
      title: title,
      url: url
    });
    this.$('.bookmark-edit-form').hide();
  },

  resetBookmark: function(){
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
  },

  deleteBookmark: function(e){
    e.preventDefault();
    this.model.destroy();
  }

});
