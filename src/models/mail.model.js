const sql = require("../../maria.js");
const logger = require('../log/logger.js');
// 생성자 
Mail = function(param) {
	//param세팅 없으면 빈칸
	this.member_email = param.member_email
	this.auth_key = param.auth_key
};

Mail.findOne = (mail, result) =>{
	const query = 'SELECT * FROM email_auth WHERE auth_email = ? and auth_key = ?';

    const param = [];
    param.push(mail.member_email);
    param.push(mail.auth_key);
	logger.info("error: ", mail);
	logger.info("error2: ", mail.auth_key);

	sql.query(query, param, (err,res)=>{
		logger.info('><>< ', res);
		if(err){
			logger.error("error: ", err);
			result(err, null);
		}
		result(null, res);
	});
};

module.exports = Mail;