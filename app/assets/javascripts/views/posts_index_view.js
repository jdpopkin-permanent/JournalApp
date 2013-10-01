JNL.Views.PostsIndexView = Backbone.View.extend({
  render: function() {
    var that = this;

    var $ul = $("<ul></ul>");

    console.log((that.collection));

    _(that.collection).each(function (post) {
      console.log(post);
      $ul.append(
        $("<li></li>").text(post["title"])
      );

      console.log("hit the li adder");
    });

    that.$el.html($ul);
    return that;
  }

});

