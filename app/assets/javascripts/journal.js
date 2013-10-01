window.JNL = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl, postsData) {
    var posts = new JNL.Collections.Posts(postsData);

    // var postsIndexView = new JNL.Views.PostsIndexView({
//       collection: postsData
//     });

    //$rootEl.html(postsIndexView.render().$el);

    console.log(posts);
    new JNL.Routers.PostsRouter($rootEl, posts);
    Backbone.history.start();

  }
};