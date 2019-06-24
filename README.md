
## PureServidor.js
Servidor http em nodejs, sem pacotes externos, Rotas simples.

```javascript
"use strict;";

const app = require('pureservidor');

const route   = app.route;
const server  = app.server;
const control = app.controller;

route('POST', '/post', control.post);

route('GET', '/consultar', control.consultar);
route('GET', '/timeout',   control.timeout);

route('GET', '/debug', async function (req, res, next) {
  res.send({msg: 'debug ok'});
});

route(control.routeHandler);
route(control.errorHandler);

server.on('error', control.error);

server.listen(3000);
```