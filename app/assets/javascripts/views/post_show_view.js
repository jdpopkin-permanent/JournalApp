JNL.Views.PostShowView = Backbone.View.extend({
  render: function() {
    // this.post
    var that = this;

    var $header = $("<h1>" + that.post.get("title") + "</h1>");
    var $body = $("<p>" + that.post.get("body") + "</p>");
    var $back = $("<button class='back'>Back to Index</button>");
    that.$el.append($header);
    that.$el.append($body);
    that.$el.append($back);
    return that;
  },

  events: {
    "click button.back": "backToIndex"
  },

  backToIndex: function(event) {
    Backbone.history.navigate("#/");
  }
});