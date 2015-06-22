export default Backbone.View.extend({

  template: JST['bookmark-add'],

  initialize: function(){
    this.render()
  },

  events: {
    'click button': 'bookmarkAdd'
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  bookmarkAdd: function(){
    this.$('.bookmark-add-form').toggleClass('hidden');
  }

});
