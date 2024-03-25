const _ = require('lodash');
const Member = require("../models/member.model.js");
const hash = require("../../hash.js");
const logger = require('../log/logger.js');

//회원조회
exports.find = (req, res) => {
	let member = new Member(req.query);
	member = _.pickBy(member , (value, key) => { return !_.isEmpty(value) });
	Member.find(member,(err,data) => {
		if (err) {
			err.sql = ''
			res.send(err);
		} else {
			res.send(data);
		}
	});
};

//회원비밀번호 변경 예시
exports.updatePw = (req, res) => {
	// hash 작업
	let member = new Member(req.body);
	member.member_pw = hash.makeHash(member.member_pw);
	
	member = _.pickBy(member , (value, key) => { return !_.isEmpty(value) });
	Member.updatePw(member,(err,data) => {
		if (err) {
			err.sql = ''
			res.send(err);
		} else {
			res.send(data[0]);
		}
	});
};

//회원가입 예시
exports.joinMember = (req, res) => {
	let member = new Member(req.body);

	Member.joinMember(member,(err,data) => {
		if (err) {
			err.sql = ''
			res.send(err);
		} else {
			res.send('success');
		}
	});
};