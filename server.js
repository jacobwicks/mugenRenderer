var express = require('express');
var app = express();
var path = require('path');
const livereload = require("livereload");
var connectLivereload = require("connect-livereload");

var liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));



app.use(connectLivereload());
app.use(express.static('public'));

app.get('/chars/:charName/:fileName*', (req, res) => {
    const { charName, fileName } = req.params;
    const filePath = req.params[0];
    console.log(`requeste filename`, fileName, filePath);
    filePath 
    ? res.sendFile(path.join(__dirname + `/chars/${charName}/${fileName}/${filePath}`))
    : res.sendFile(path.join(__dirname + `/chars/${charName}/${fileName}`))
}) 



// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);