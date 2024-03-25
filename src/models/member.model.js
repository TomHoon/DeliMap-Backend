const sql = require("../../maria.js");
const logger = require('../log/logger.js');
// 생성자 
Member = function(param) {
	//param세팅 없으면 빈칸
	this.member_id = param.member_id
	this.member_pw = param.member_pw
	this.member_name = param.member_name
	this.member_nickname = param.member_nickname
	this.member_email = param.member_email
};

// 회원조회
Member.find = (member, result) =>{
	const query = 'SELECT * FROM MEMBER;';
	sql.query(query,(err,res)=>{
		if(err){
			logger.error("error: ", err);
			result(err, null);
			return;
		}

		logger.info("member.findAll: ", res);
		result(null, res);
	});
};

// 회원 비밀번호변경 예시
Member.updatePw = (member, result) =>{
	const query = 'UPDATE MEMBER SET member_pw =? WHERE member_id = ?;';
	sql.query(query,[member.member_pw, member.member_id], (err,res)=>{
		if(err){
			logger.error("error: ", err);
			result(err, null);
			return;
		}
		logger.info("updatePw: ", res);
		result(null, res);
	});
};

// 회원 비밀번호변경 예시
Member.joinMember = (member, result) =>{
	const query = 'INSERT INTO member(member_id, member_pw, member_name, member_nickname, member_email) VALUES (?, ?, ?, ?, ?);';

	const param = [];
	param.push(member.member_id);
	param.push(member.member_pw);
	param.push(member.member_name);
	param.push(member.member_nickname);
	param.push(member.member_email);

	sql.query(query, param, (err,res)=>{
		if(err){
			logger.error("error: ", err);
			result(err, null);
			return;
		}
		logger.info("joinMember: ", res);
		result(null, res);
	});
};


Member.sendEmailAuth = (member, result) =>{
	const query = 'INSERT INTO email_auth(auth_email, auth_id, auth_key) VALUES(?, ?, ?);';

	const param = [];
	param.push(member.member_email);
	param.push(member.member_id);
	param.push(member.auth_key);

	sql.query(query, param, (err,res)=>{
		if(err){
			logger.error("error: ", err);
			return err;
		}
		logger.info("sendEmailAuth: ", res);
		return res;
	});
};
module.exports = Member;