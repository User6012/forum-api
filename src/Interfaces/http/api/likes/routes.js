const routes = (handler) => ([
  {
    method: 'PUT',
    path: '/threads/{threadId}/comments/{commentId}/likes',
    handler: handler.putLikeHandler,
    options: {
      auth: 'forum_jwt',
      plugins: {
        'hapi-rate-limit': {},
      },
    },
  },
]);

module.exports = routes;
