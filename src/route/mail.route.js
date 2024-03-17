const router = require('express').Router();
const express = require("express");
const mailer = require('../../mail');
router.use(express.json())
router.use(express.urlencoded({extended:false}));

router.post('', (req, res) => {
    console.log('>>>> here ', req.body);
    const { email } = req.body;
    let emailParam = {
        toEmail: email, // 수신자

        subject: 'hello my name is tomhoon', 
        text: `it's content of email`
    };

    mailer.sendGmail(emailParam);

    res.status(200).send("성공");
})

module.exports = router;