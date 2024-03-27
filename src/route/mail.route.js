const router = require('express').Router();
const express = require("express");
const mailer = require('../../mail');
const Member = require("../models/member.model.js");
const Mail = require("../models/mail.model.js");
const logger = require('../log/logger.js');
const mail = require('../controller/mail.controller.js');
router.use(express.json())
router.use(express.urlencoded({extended:false}));

router.post('', (req, res) => {
    const { member_email } = req.body;
    const { member_id } = req.body;

    let 인증번호 = Math.random() * 100000;
    인증번호 = ~~인증번호;
    인증번호 += 'k';

    let emailParam = {
        toEmail: member_email, // 수신자
        subject: 'Delimap 인증 메일입니다.', 
        text: 인증번호
    };

    mailer.sendGmail(emailParam);

    const result = Member.sendEmailAuth({member_email: member_email, member_id: member_id, auth_key: 인증번호});
    logger.info('/mail res >>> ', result);

    res.status(200).send(result);
});
router.post('/check', mail.check);
// router.post('/check', (req, res) => {
//     const { member_email } = req.body;
//     const { auth_key } = req.body;
//     logger.info(auth_key + '>>>>>1');
//     logger.info(member_email + '>>>>>2');

//     const param = {
//         member_email: member_email,
//         auth_key: auth_key
//     }
//     const result = Mail.findOne(param);
//     logger.info(result + '>>>>>');
    
//     // Member.sendEmailAuth({member_id: member_id, auth_key: 인증번호});

//     res.status(200).send("성공");
// })

module.exports = router;