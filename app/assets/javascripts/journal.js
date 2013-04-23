window.MJ = {
  Routers: {},
  Models: {},
  Views: {},
  Collections: {},

  initialize: function ($sidebar, $content, postsData) {
    var posts = new MJ.Collections.Posts(postsData);

    this.installSidebar($sidebar, posts);
    new MJ.Routers.PostsRouter($content, posts);
    Backbone.history.start();
  },

  installSidebar: function($sidebar, posts) {
    var that = this;

    var postsListView = new MJ.Views.PostsListView({
      collection: posts
    });

    $sidebar.html(postsListView.render().$el);
  }


};