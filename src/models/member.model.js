const sql = require("../../maria.js");
const logger = require('../log/logger.js');
// 생성자 
Member = function(param) {
	//param세팅 없으면 빈칸
	this.member_pw = param.member_pw
	this.member_id = param.member_id
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
	const query = 'INSERT INTO MEMBER VALUES (?, ?);';
	sql.query(query,[member.member_pw, member.member_id], (err,res)=>{
		if(err){
			logger.error("error: ", err);
			result(err, null);
			return;
		}
		logger.info("joinMember: ", res);
		result(null, res);
	});
};

module.exports = Member;