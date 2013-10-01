JNL.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function($rootEl, posts) {
    this.$rootEl = $rootEl;
    this.posts = posts;
  },

  routes: {
    "": "index",
    "posts/:id": "show"
  },

  index: function() {
    var that = this;

    var postsIndexView = new JNL.Views.PostsIndexView({
      collection: that.posts
    });

    that.$rootEl.html(postsIndexView.render().$el);
  },

  show: function(id) {
    var that = this;
    //console.log("entered show");
    var post = new JNL.Models.Post({id: id});
    //console.log("empty post")
    //console.log(post);

    post.fetch({
      success: function() {
        var postShowView = new JNL.Views.PostShowView();
        postShowView.post = post;

        that.$rootEl.html(postShowView.render().$el);
      },

      failure: function() {
        console.log("Failed");
      }
    });
  }
});