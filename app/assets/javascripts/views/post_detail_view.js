MJ.Views.PostDetailView = Backbone.View.extend ({
  events: {
    "dblclick .edit": "edit",
    "keypress .edit": "updateOnEnter",
    "blur .edit": "closeTitle"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/detail"] ({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  edit: function (ev){
    var $target = $(ev.currentTarget);

    if ($target.attr("id") == "post_title") {
      var type = "<input type='text'></input>";
    } else {
      var type = "<textarea></textarea>";
    }

    var title = $target.text();

    var $editBox = $(type)
                    .attr("id", "post_title")
                    .attr("name", "post[title]")
                    .val(title);
    $target.html($editBox);
    $target.focus();
  },

  updateOnEnter: function(ev) {
    var $target = $(ev.currentTarget);

    if (ev.keyCode == 13) {
      $target.attr("id") == "post_title" ? this.closeTitle() : this.closeBody();
    }
  },

  closeTitle: function () {
    var $target = $("#post_title");
    console.log ($target);
    var value = $target.val();
    if (value) {
      this.model.save({title: value});
    }

    console.log($target.text());
    this.render();
  }
});