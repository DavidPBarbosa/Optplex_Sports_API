require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('./db/db');

const routes = require('./routes/routes');
const clienteRoutes = require('./routes/clienteroutes');
const pedidoRoutes = require('./routes/pedidoroutes');
const produtoRoutes = require('./routes/produtoroutes');
const itempedidoRoutes = require('./routes/itempedidoroutes');

const corsOptions = {
    origin: ['http://localhost:3333', 'http://127.0.0.1:5501'], 
    methods: 'GET, POST, PUT, PATCH, DELETE', 
    credentials: true, 
    allowedHeader: ['Content-Type','*'],
    exposedHeader: ['Content-Length','X-Total-Count']
};
const app = express();

app.use(helmet()); 
app.use(cors(corsOptions));

app.use(morgan('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'))
});

app.use('/', routes);
app.use('/', clienteRoutes);
app.use('/', produtoRoutes);
app.use('/', pedidoRoutes);
app.use('/', itempedidoRoutes);

app.use((err, req, res, next) => {
    consol.console.error(err.stack);
    res.status(500).send('Algo de errado!');
});    

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
