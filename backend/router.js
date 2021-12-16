const router = require('express').Router()

const con = require('./config/conn')

const bodyParser = require('body-parser');
const { query } = require('express');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.post('/', urlencodedParser, (req, res) => {
    const { nome, cpf, endereco, data_nasc, email, senha } = req.body
    let sql = `insert into usuario (nome,cpf,endereco,data_nasc,email,senha) 
               values('${nome}','${cpf}','${endereco}','${data_nasc}','${email}', '${senha}')`
    con.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: "Usuario cadastrado com sucesso!" })
    })
})


router.get('/', (req, res) => {
    let sql = 'select * from usuario order by nome asc'
    con.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json(rows)
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { nome, cpf, endereco, data_nasc, email, senha } = req.body
    let sql = `update usuario set nome = '${nome}', cpf = '${cpf}',
                 endereco = '${endereco}',  data_nasc = '${data_nasc}', 
                 email = '${email}',  senha = '${senha}' where id = '${id}'`
    con.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: 'usuario alterado com sucesso!' })

    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    let sql =`delete from usuario where id = '${id}'`

    con.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: 'usuario excluído com sucesso!' })
    })
})



module.exports = router