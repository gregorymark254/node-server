const express = require('express');
const router = express.Router();
const authControler = ('../controlers/authControler')

router.post('/auth', authControler.handleLogin);

module.exports = router

