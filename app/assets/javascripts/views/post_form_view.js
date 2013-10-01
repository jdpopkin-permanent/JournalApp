JNL.Views.PostFormView = Backbone.View.extend({
  render: function() {
    var that = this;

    // find post in some way
    console.log(that.post.attributes);
    var renderedContent = JST["posts/form"]({
      body: that.post.attributes.body,
      title: that.post.attributes.title
    });
    that.$el.html(renderedContent);
    return that;
  }


});