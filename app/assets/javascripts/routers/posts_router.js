MJ.Routers.PostsRouter = Backbone.Router.extend ({
  initialize: function (rootEl, posts) {
    this.$rootEl = $(rootEl);
    this.posts = posts;
  },

  routes: {
    "": "index"
  },

  index: function () {
    var that = this;

    var postsListView = new MJ.Views.PostsListView({
      collection: that.posts
    });

    that.$rootEl.html(postsListView.render().$el);
  }
});