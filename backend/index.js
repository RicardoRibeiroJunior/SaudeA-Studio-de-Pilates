require('./config/conn')

const express = require('express')

const app = express()

const port = 3000



// utilizar arquivo no formato json
app.use(express.json())

// criando variavel para armazenar todas as rotas deinifidos no rotas js
const routerUser = require('./router')

// para todas as rotas definidas em no arquivo rotas.js, deve ser considerado o caminho /tarefas
app.use('/user', routerUser)

app.listen(port, () => {
    console.log('servidor rodando')
})