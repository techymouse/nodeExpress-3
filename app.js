//First Express program and Route 


let express = require('express');

let app = express();

app.get('/shop/:categoty',function(request,response){
    response.send(`<h1>Homepage</h1>`);
})

app.get('/About',function(request,response){
    response.send('<h1>This is first site in express</h1>');

})

app.get('/Contact',function(request,response){
    response.send('<h1>+91-7678194647</h1>');
})

app.get('*',function(request,response){
    response.send('<h1>400 Not Found</h1>');
})

app.listen(3000,function(){
    console.log('Listening Port 3000 ....');
})



/*

//Importing a variable, a function or amodule from math.js

let math = require('./math');
console.log(math.PI);
console.log(math.sum([math.PI,10,8]));
console.log(math.findMax([math.PI,10,8]));
console.log(math.findMin([math.PI,10,8]));

*/



