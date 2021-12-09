const router = require('express').Router()

const con = require('./config/conn')

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.post('/', urlencodedParser, (req, res) => {
    const { nome, cpf, endereco, data_nasc, email, senha } = req.body
    let sql = `insert into usuario (nome,cpf,endereco,data_nasc,email,senha) 
               values(${nome},${cpf},${endereco},${data_nasc},${email}, ${senha})`
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

module.exports = router