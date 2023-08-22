const express = require('express');
 const routerApp = require('./router/index');
const app = express();

app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Ready!!')
})

 routerApp(app);

app.listen(4000, () =>{
    console.log('Server running!');
})