const http = require('http');

let myURL = new URL('https://mystat.itstep.org/ru/main/homework/page/index?12332&ad=123');

http.createServer(function (request, response) {
  response.end(`URL - ${myURL} \nHost - ${myURL.host} \nPath - ${myURL.pathname} \nQuery - ${myURL.search}`);
}).listen(3000, '127.0.0.1', () => {
  console.log('Сервер начал прослушивание запросов');
})