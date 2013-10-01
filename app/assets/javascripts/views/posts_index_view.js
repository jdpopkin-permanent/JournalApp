JNL.Views.PostsIndexView = Backbone.View.extend({
  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);

    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
  },

  render: function() {
    var that = this;
    console.log("HERE");
    var $ul = $("<ul></ul>");

    _(that.collection.models).each(function (post) {
      var $li = $("<li id='" + post.attributes["id"] + "'></li>").text(post.attributes["title"])
      var $button = $("<button class='delete-button' data-id='" + post.attributes["id"] + "'>Delete</button>")

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
    event.preventDefault();

    var button = event.target;
    var $removableLi = $(button).parent();

    var postId = parseInt($removableLi.attr("id"));
    var post = new JNL.Models.Post({ id: postId });
    post.destroy();

    $removableLi.remove();
  }

});

