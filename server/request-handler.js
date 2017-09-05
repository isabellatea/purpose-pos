/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
// var storage = {};
// storage.results = [];

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./sample_data.db', sqlite.OPEN_READWRITE, (err) => {
  if (err) {
    console.log('DB Connect error', err.message);
  } else {
    console.log('Connected to sqlite');
  }
});

var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  // The outgoing status.
  var statusCode = 200;

  // See the note below about CORS headers.
  var defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
  };
  var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = 'application/json';

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  // response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  // response.end('Hello, World!');

  const getAllPuppies = () => {
    const allPuppiesSql = `SELECT * FROM puppies`;
    console.log("get all pups top");
    db.all(allPuppiesSql, [], (err, rows) => {
      console.log('querying all puppies', rows);
      if (err) {
        throw err;
      }
      response.writeHead(200, headers);
      response.end(JSON.stringify(rows));
    })
  }

  if (request.method === 'GET') {
    if (request.url === '/getAll') {
      console.log("GETting all puppies");
      getAllPuppies();
    } else {
      response.writeHead(404, headers);
      response.end('404');
    }
  } else if (request.method === 'POST') {
    if (request.url === '/addItem') {
      // save data to db
      let body = [];
      request.on('data', function(chunk) {
        console.log("POST I'm here", chunk);
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const data = JSON.parse(body);
        
        const columns = Object.keys(data).join(', ');
        const values = Object.values(data);

        let actualValues = '';
        values.forEach((item, idx, coll) => {
          if (typeof item === 'string') {
            actualValues += '"' + item + '"';
            if (idx < coll.length - 1) {
              actualValues += ", ";
            }
          }
        });

        // `INSERT INTO puppies(name, description, img_url, price, status, location, diet) VALUES ('White Walker', 'My fur is white. I like to walk. Why do people look at me strangely when I tell them my name?', 'https://tinyurl.com/y9653oo8', 4, 'available', 4, 4);`
        const postSql = `INSERT INTO puppies (${columns}) VALUES (${actualValues})`;
        db.run(postSql, [], (err) => {
          if (err) {
            console.log('DB error', err);
          } else {
            console.log('Successfully wrote to DB!!! Yeah!Q!!!!@!!!`~!!!')
          }
        })
        response.writeHead(201, headers);
        response.end('Successfully wrote to db??? Eff yeah!');
      })
    } else {
      response.writeHead(401, headers);
      response.end('401');
    }
  } else if (request.method === 'OPTIONS') {
    console.log("OPTIONS im here")
    response.writeHead(200, headers);
    response.end();
  }
    //on end, send response code and some message

}


// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.


module.exports.requestHandler = requestHandler;