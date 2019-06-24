"use strict;";

const http   = require('http');
const Router = require('../lib/node-router');

const router = Router();
const route  = router.push;

const server = http.createServer(router);

server.setTimeout(10000);

exports.route  = route;
exports.server = server;
exports.controller = require('../controller');
