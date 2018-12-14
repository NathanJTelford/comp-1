const Express = require('express');
// const Cors = require ('cors');
const Massive = require('massive');
require('dotenv').config();
const CTRL = require('./Controller')

const app = Express();

const port = process.env.SERVER_PORT;

app.use(Express.json());

const { CONNECTION_STRING } = process.env;


// app.get('/',(req,res=>{const db = req.app.get('db');
//     db.product().then(product=>{
//         res.send(product);
//     })
// }))

Massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(port, () => { console.log(`Server Listening On Port ${port}`) })
}).catch(err => { console.log(err) })