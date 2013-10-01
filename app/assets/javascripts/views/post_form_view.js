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
  },

  events: {
    "click .submit": "submit"
  },

  submit: function(event) {
    event.preventDefault();

    var that = this;
    console.log("Got here.");

    var form = $(event.target).parent();
    var inputs = $(form).children().children();
    //text and body form inputs
    var $title = $(inputs[0]);
    var $body = $(inputs[1]);

    var newTitle = $title.val();
    var newBody = $body.val(); // problem: carriage return issue

    var newId = that.post.id;

    var newPost = new JNL.Models.Post({id: newId, title: newTitle, body: newBody});

    newPost.save({}, {
      success: function() {
        // cf router for show
        //add to post collection
        Backbone.history.navigate("", {trigger: true});
      },

      error: function(model, xhr) {
        var postFormView = new JNL.Views.PostFormView();
        postFormView.post = newPost;
        console.log(xhr.responseText);

        that.$el.html(postFormView.render().$el);

        var $error = $("<p>" + xhr.responseText + "</p>");
        that.$el.append($error);
      }
    });

  }
});