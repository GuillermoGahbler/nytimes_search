
var searchTerm =$("#search-input").attr('q')

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL=queryURL+ '?' + $.param({
  'api-key': "86fde0a648424cc3a58e7f5147509bb3" ,
  'q': searchTerm
});
$.ajax({
  url: queryURL,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

