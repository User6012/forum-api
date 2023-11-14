const routes = (handler) => ([
  {
    method: 'POST',
    path: '/threads/{threadId}/comments',
    handler: handler.postCommentHandler,
    options: {
      auth: 'forum_jwt',
      plugins: {
        'hapi-rate-limit': {},
      },
    },
  },
  {
    method: 'DELETE',
    path: '/threads/{threadId}/comments/{commentId}',
    handler: handler.deleteCommentByIdHandler,
    options: {
      auth: 'forum_jwt',
      plugins: {
        'hapi-rate-limit': {},
      },
    },
  },
]);

module.exports = routes;
