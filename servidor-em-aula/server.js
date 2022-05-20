const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json([
        {
        " Mensagem": "API de filmes Ghibli On15"
        }
    ])
})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
});

app.get("/filmes/buscar/:id", (request, response) => {
    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body
    
    let novoFilme = {
        id: (filmesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description

    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "Mensagem": "Filme cadastrado com sucesso!!",
        novoFilme
    })
    
})

app.listen(5050, () => {
    console.log("Olá mundooo, criei meu servidor e tô na porta 5050");
});

