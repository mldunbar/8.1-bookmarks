export default Backbone.View.extend({
  template: JST.bookmarks,

  initialize: function(){
    this.render()
  },

  render: function(){
    console.log(this);
  },

})
