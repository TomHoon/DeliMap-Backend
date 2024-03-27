const Mail = require("../models/mail.model.js");
const logger = require('../log/logger.js');

exports.check = (req, res) => {
	let mail = new Mail(req.body);

	Mail.findOne(mail,(err,data) => {
		if (err) {
			err.sql = ''
			res.send(err);
		} else {
			res.send(!!data[0]);
		}
	});
};