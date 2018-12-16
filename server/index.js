const Express = require('express');
// const Cors = require ('cors');
const Massive = require('massive');
require('dotenv').config();

const app = Express();

const port = process.env.SERVER_PORT;

app.use(Express.json());

const { CONNECTION_STRING } = process.env;

app.post(`/api/product`,(req,res)=>{const db = req.app.get('db');
    db.CreateProduct(req.body.description,req.body.price,req.body.image).then(product=>
    { res.status(200).send(product)}
    ).catch(err=>{console.log(err)})
})


app.get(`/api/products`,(req,res)=>{const db = req.app.get('db');
    db.product().then(product=>{
        res.status(200).send(product);
    }).catch(err=>{console.log(err)})
})

app.delete(`/api/product/:id`,(req,res)=>{const db = req.app.get('db');
    db.deleteProduct(req.params.id).then(product=>{res.status(200).send(product);
    }).catch(err=>{console.log(err)})
})

app.put(`/api/product/:id`,(req,res)=>{const db = req.app.get('db');
db.editProduct(req.body.id).then(product=>{app.status(200).send(product);
}).catch(err=>{console.log(err)})
})

Massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(port, () => { console.log(`Server Listening On Port ${port}`) })
}).catch(err => { console.log(err) })