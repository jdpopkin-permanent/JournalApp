window.JNL = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl, postsData) {
    var posts = new JNL.Collections.Posts(postsData);

    var postsIndexView = new JNL.Views.PostsIndexView({
      collection: postsData
    });

    $rootEl.html(postsIndexView.render().$el);

    new JNL.Routers.PostsRouter($rootEl, postsData);
    Backbone.history.start();

  }
};