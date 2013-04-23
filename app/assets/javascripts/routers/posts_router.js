MJ.Routers.PostsRouter = Backbone.Router.extend ({
  initialize: function (rootEl, posts) {
    this.$rootEl = $(rootEl);
    this.posts = posts;
  },

  routes: {
    "": "index",
    "post/new": "new",
    "posts/:id": "show"
  },

  index: function () {
    var that = this;

    var postsListView = new MJ.Views.PostsListView({
      collection: that.posts
    });

    that.$rootEl.html(postsListView.render().$el);
  },

  show: function (id) {
    var that = this;

    var post = that.posts.get(id);
    var postDetailView = new MJ.Views.PostDetailView({
      model: post
    });

    that.$rootEl.html(postDetailView.render().$el);
  },

});