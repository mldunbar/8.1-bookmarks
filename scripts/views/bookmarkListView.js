import BookmarkItemView from './bookmarkItemView';

export default Backbone.View.extend({
  template: JST.index,

  initialize: function(){
    this.render()
  },

  render: function(){
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new BookmarkItemView({
        model: child
      });
      this.$el.append(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }

})
