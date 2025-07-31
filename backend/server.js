const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); 


app.listen(5000,()=>{
    console.log('Server running at : http://localhost:5000/?n1=<value>&n2=<value>&op=<operator>')
});

// url eg: http://localhost:5000/?n1=20&n2=5&op=- 

app.get('/calc', (req, res)=>{
    const x = parseFloat(req.query.n1); 
    const y = parseFloat(req.query.n2);
    let op = req.query.op;

    let result =0;

    switch(op){
        case "+" : result = x +y;
        break;

        case "-" : result = x -y;
        break;

        case "*" : result = x *y;
        break;

        case "/" : result = x / y;
        break;
    }

    res.send(`Result : ${x} ${op} ${y} = ${result}`);
});


// url eg : http://localhost:5000/frt?n=5

app.get('/frt', (req, res)=>{
    const x = parseFloat(req.query.n);

    let result = 1;
    for(let i= 1; i<=x; i++){
        result *=i;
    };

    res.send(`Result : ${x}! =${result}`);
});