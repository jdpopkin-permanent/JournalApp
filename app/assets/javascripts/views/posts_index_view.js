JNL.Views.PostsIndexView = Backbone.View.extend({
  render: function() {
    var that = this;

    var $ul = $("<ul></ul>");

    console.log((that.collection));


    _(that.collection).each(function (post) {
      console.log(post);
      var $li = $("<li id='" + post["id"] + "'></li>").text(post["title"])
      var $button = $("<button class='delete-button' data-id='" + post["id"] + "'>Delete</button>")

      $li.append($button);
      $ul.append($li);
    });

    that.$el.html($ul);
    return that;
  },

  events: {
    "click button.delete-button": "deletePost"
  },

  deletePost: function(event) {
    var button = event.target;
    var $removableLi = $(button).parent();

    var postId = parseInt($removableLi.attr("id"));
    var post = new JNL.Models.Post({ id: postId });
    post.destroy();

    $removableLi.remove();
  }

});

