var express = require('express');
var router = express.Router();
var serialize = require('node-serialize')

/* GET users listing. */
router.get('/', function(req, res, next) { 
  
 
  try {
    console.log(req.cookies.token)
    if (!req.cookies.token) res.cookie("token", "eyJpZCI6IDY2NiwgInVzZXJuYW1lIjogImpvaG4gcGFudGF1IiwgImFsYW1hdCI6Ik1hbXBhbmcsIEpha2FydGEgU2VsYXRhbiIsICJ0ZWxwIjoiMDg1MjIxMjMxMjMxMiJ9Cg==", {
      maxAge: 900000,
      httpOnly: true
    });
    var token = req.cookies.token
    var str = new Buffer(token, "base64").toString();
    var obj = serialize.unserialize(str);
    console.log(str)
      if (obj.username) {
        return res.send("Selamat Datang " + obj.username + " !!!");
      }else {
        res.status(500).send({'message': 'error'})
      }
  } catch (error) {
    console.log(error)
    return res.json({'status' : '500', 'message' : 'its an error'})
  }
 
 });

module.exports = router;
