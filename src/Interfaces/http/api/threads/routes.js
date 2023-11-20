const routes = (handler) => ([
  {
    method: 'POST',
    path: '/threads',
    handler: handler.postThreadHandler,
    options: {
      auth: 'forum_jwt',
      plugins: {
        'hapi-rate-limit': {
          enabled: true,
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/threads/{threadId}',
    handler: handler.getThreadHandler,
    options: {
      plugins: {
        'hapi-rate-limit': {
          enabled: true,
        },
      },
    },
  },
]);

module.exports = routes;
