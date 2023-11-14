const routes = (handler) => ([
  {
    method: 'POST',
    path: '/threads',
    handler: handler.postThreadHandler,
    options: {
      auth: 'forum_jwt',
      plugins: {
        'hapi-rate-limit': {},
      },
    },
  },
  {
    method: 'GET',
    path: '/threads/{threadId}',
    handler: handler.getThreadHandler,
    options: {
      plugins: {
        'hapi-rate-limit': {},
      },
    },
  },
]);

module.exports = routes;
