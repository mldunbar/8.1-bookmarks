$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'GbTawCEmyJeW6nEbBtXGbNqrkyLGYsQanMrgFZH6';
    options.headers['X-Parse-REST-API-Key'] = '2VfTfew5XdZY6X4OGdErIjGtEwDcb2rfEKsNUuVt';
  }
});
