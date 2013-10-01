JNL.Views.PostShowView = Backbone.View.extend({
  render: function() {
    // this.post
    var that = this;

    var $header = $("<h1>" + that.post.get("title") + "</h1>");
    var $body = $("<p>" + that.post.get("body") + "</p>");
    that.$el.append($header);
    that.$el.append($body);
    return that;
  }
});