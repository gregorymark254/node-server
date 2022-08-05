const express = require('express');
const router = express.Router();
const registerControler = ('../controlers/registerControler'); 

router.post('/', registerControler.handleNewUser);

module.exports = router;