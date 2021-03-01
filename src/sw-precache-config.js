module.exports = {
    staticFileGlobs: [
      'dist/**.html',
      'dist/**.js',
      'dist/**.css',
      'dist/assets/**.png',
      'dist/assets/**.jpg',
      'dist/assets/**.svg',
      'dist/vendor.**.bundle.js'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html',
    runtimeCaching: [
      {
        urlPattern: /^(https\:)(\/\/)([^\:\/]*)(\:\d{1,5})?(\/)([^\/\?\&\#\:]*)?\/?([^\/\?\&\#\:]*)?\/?([^\/\?\&\#\:]*)?\/?([^\/\?\&\#\:]*)?\/?([^\/\?\&\#\:]*)?\/?([^\/\?\&\#\:]*)?\/?([^\/\?\&\#\:]*)?\/?([^\/\?\&\#\:]*)?\/?(.*)$/,
        handler: 'cache-first',
      },
      {
        urlPattern: /\/food-list\//,
        handler: 'cache-first',
      },
      {
        urlPattern: /\/profile\//,
        handler: 'cache-first',
      },
      {
        urlPattern: /\/daily\//,
        handler: 'cache-first',
      },
      {
        urlPattern: /\/progress\//,
        handler: 'cache-first',
      },
      
    ]
  };