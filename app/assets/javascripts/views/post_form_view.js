JNL.Views.PostFormView = Backbone.View.extend({
  render: function() {
    var that = this;

    // find post in some way
    //console.log(that.post.attributes);
    var renderedContent = JST["posts/form"]({
      body: that.post.attributes.body,
      title: that.post.attributes.title
    });
    that.$el.html(renderedContent);
    return that;
  },

  events: {
    "submit form.post-form": "submit"
  },

  submit: function(event) {
    event.preventDefault();

    var that = this;

    var $form = $(event.target);

    that.post.save($form.serializeJSON(), {
      success: function() {
        if (!that.collection.findWhere({id: that.post.id})) {
          that.collection.add(that.post);
        }
        console.log(that.post);
        // cf router for show
        //add to post collection
        Backbone.history.navigate("", {trigger: true});
      },

      error: function(model, xhr) {
        var postFormView = new JNL.Views.PostFormView();
        postFormView.post = that.post;
        console.log(xhr.responseText);

        that.$el.html(postFormView.render().$el);

        var $error = $("<p>" + xhr.responseText + "</p>");
        that.$el.append($error);
      }
    });

  }
});