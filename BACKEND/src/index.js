const express = require('express');
const cors = require('cors')
const routes = require('./routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/*
Metodos HTTP
GET: Buscar/listar uma imformacao no back-end
POST: Enviao uma informacao para o back-end
PUT: Altera uma imformcao no back-en
DELETE: Exclui uma informacao no back-end
*/
/*
Tipos de parametros
Querey params : vem da url amostra,parametros nomeados e enviados na rota apos o simbolo de ? geramente server para filtros paginacao

/user?name=
const params = req.query;
const params = req.query['name'](assim eu pego um query params expecifico)

//rota exemplo acessando um query params
app.get('/user', (req ,res ) =>{
    const params = req.query['name']
    return res.json({
        teste : "teste"
    });
});

/////////////////////////////////////
Router params : vem da url mais escondido,parametros utilizados para indentificar recursos
/user/:id
const id= req.params;

app.get('/user/:id?' (colocando o ? o parametro passar a ser opcional)

//rota exemplo acessando o Router params 
app.get('/user/:id', (req ,res ) =>{
    const id= req.params.id;
    return res.json({
        teste : "teste"
    });
});

///////////////////////////
Request Body  : vem da pagina,Corpo da requisicao,utilizado para criar ou alterar recursos

//Rota exemplo a pagina esta enviado para o back-end um usuario

const user= req.body.name (pegando um requisicao do body com um nome expecifico)

app.post('/user', (req ,res ) =>{
    const user= req.body
    return res.json({
        teste : "User  received (usuario recebido)"
    });
});
*/
/*
Bancos de dados
Sql : MySql , SqlLite ,PostgreSQL,Oracle,Microsoft SQL Server
NoSql : Mongodb , CouchDB , etc
*/

app.get('/', (req, res) => {
    return res.json({
        teste: "ola mundo"
    });
});

app.listen(3030, err => {
    if (err) {
        console.log(err);

    } else {
        console.log("servidor rodando portal : http://localhost:3030");

    }
});