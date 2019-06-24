"use strict;";

const isset   = require('../lib/util/isset.js');
const leftPad = require('../lib/util/leftPad.js');

module.exports = function (req, res, next) {

	let doc = req.url.split('/');

	if(isset(doc) && isset(doc[2])) {
		let docok = leftPad(Number(doc[2]), 11);

		if(docok.match(/[0-9]{11,}/g)) {
      res.send({msg: "rota: /consultar", doc: docok});
	  }else{
      res.send({msg:'doc invalido.'});
	  }
	}else{
		res.send('not found');		
	}

}
