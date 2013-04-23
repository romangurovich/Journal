MJ.Views.NewPostView = Backbone.View.extend ({
  events: {
    "click button.submit": "submit"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/new"] ();

    that.$el.html(renderedContent);
    return that;
  },

  submit: function () {
    var that = this;

    var post = new MJ.Models.Post ({
      title: that.$("input[name=post\\[title\\]]").val(),
      body: that.$("textarea[name=post\\[body\\]]").val()
    });

    that.collection.add(post);
    post.save();
    Backbone.history.navigate("#/");
  }
});