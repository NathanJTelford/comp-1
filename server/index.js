const Express = require('express');
// const Cors = require ('cors');
const Massive = require('massive');
require('dotenv').config();

const app = Express();

const port = process.env.SERVER_PORT;

app.use(Express.json());

const { CONNECTION_STRING } = process.env;

app.post(`/api/product`,(req,res)=>{const db = req.app.get('db');
    db.editProduct(req.body.description,req.body.price,req.body.image).then(()=>
    {    res.sendStatus(200)}
    ).catch(err=>{console.log(err)})
})


app.get(`/api/products`,(req,res)=>{const db = req.app.get('db');
    db.product().then(product=>{
        res.status(200).send(product);
    }).catch(err=>{console.log(err)})
})

Massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(port, () => { console.log(`Server Listening On Port ${port}`) })
}).catch(err => { console.log(err) })