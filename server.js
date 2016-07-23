var path = require('path');
var express = require('express');
var https = require('https');

var app = express();

app.use(express.static(path.join(__dirname, 'client/')));

app.get('/api/spotify/:id', function(req, res) {
  var query = req.params.id;
  https.get("https://api.spotify.com/v1/search?q=" + query, function(response) {
    var data = ''
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      var body = JSON.parse(data);
      if (response.statusCode >= 400 || !(body.artists.items.length)) {
        res.send([]);
        return;
      }
      var id = body.artists.items[0].id;
      https.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=SE`, function(response) {
        var data = ''
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          res.send(JSON.parse(data).tracks);
        })
      });
    });
  });
});

app.listen(process.env.PORT || 3000);
