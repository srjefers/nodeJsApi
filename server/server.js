require('./config/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parse app/x-wwww-form-urlencoded
//app.use > es un middelware
app.use(bodyParser.urlencoded({
    extended: false
}));


//Obtiene datos
app.get('/usuario',function(req, res){
    res.json('get Usuario');
});
//inserta datos
app.post('/usuario',function(req, res){
    let body = req.body;
    if (body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    }else{
        res.json({
            dataIn: body
        });
    }
});
//actualizaDatos/:parametro
app.put('/usuario/:id',function(req, res){
    let id = req.params.id;
    res.json(
        id
    );
});
//elimina datos
app.delete('/usuario',function(req, res){
    res.json('delete Usuario');
});




app.listen(process.env.PORT, () => {
    console.log('listening at port',process.env.PORT);
});

/*
    npm install body-parser --save
        Permite obtener muchos parametros.

    */

