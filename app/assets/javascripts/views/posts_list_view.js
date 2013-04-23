MJ.Views.PostsListView = Backbone.View.extend ({
  render: function () {
    var that = this;

    var renderedContent = JST["posts/list"] ({
      posts: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});