MJ.Routers.PostsRouter = Backbone.Router.extend ({
  initialize: function (rootEl, posts) {
    this.$rootEl = $(rootEl);
    this.posts = posts;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show"
  },

  index: function () {
    var that = this;

    var $newButton = $("<a>Make a New Post</a>")
                        .addClass("btn")
                        .attr("href", "#/posts/new");

    that.$rootEl.html($newButton);
  },

  show: function (id) {
    var that = this;

    var post = that.posts.get(id);
    var postDetailView = new MJ.Views.PostDetailView ({
      model: post
    });

    that.$rootEl.html(postDetailView.render().$el);
  },

  new: function () {
    var that = this;

    var newPostView = new MJ.Views.NewPostView ({
      collection: that.posts
    })

    that.$rootEl.html(newPostView.render().$el);
  }

});