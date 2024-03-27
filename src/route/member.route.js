const router = require('express').Router();
const member = require('../controller/member.controller.js');
const express = require("express");

router.use(express.json())
router.use(express.urlencoded({ extended: false }));

// ''빈칸이면 넘어온 요청 defalt (/members)
router.get('', member.find);

// 해당요청은 /members/updatePw로 요청왔을시 작동하는 구조
router.post('/updatePw', member.updatePw);

router.post('/login', member.login);

// 해당요청은 /members/joinMember 요청왔을시 작동하는 구조
router.post('/joinMember', member.joinMember);

module.exports = router;