window.MJ = {
  Routers: {},
  Models: {},
  Views: {},
  Collections: {},

  initialize: function ($sidebar, $content, postsData) {
    var posts = new MJ.Collections.Posts(postsData);

    new MJ.Routers.PostsRouter($sidebar, posts);
    Backbone.history.start();
  }
};