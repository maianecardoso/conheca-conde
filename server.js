const http = require("http");
const fs = require("fs");
const path = require("path");

const PORTA = 3000;

const servidor = http.createServer((req, res) => {

    let rota = req.url;

    if (rota === "/") {
        rota = "/index.html";
    }

    if (rota === "/historia") {
        rota = "/historia.html";
    }

    if (rota === "/pontos-turisticos") {
        rota = "/pontos-turisticos.html";
    }

    if (rota === "/cultura") {
        rota = "/cultura.html";
    }

    if (rota === "/gastronomia") {
        rota = "/gastronomia.html";
    }

    if (rota === "/galeria") {
        rota = "/galeria.html";
    }

    if (rota === "/informacoes") {
        rota = "/informacoes.html";
    }

    if (rota === "/api/cidade") {

        const cidade = {
            cidade: "Conde",
            estado: "Bahia",
            pais: "Brasil",
            regiao: "Litoral Norte da Bahia",
            pontosTuristicos: [
                "Sítio do Conde",
                "Siribinha",
                "Barra de Siribinha",
                "Cavalo Russo",
                "Barra do Itariri"
            ],
            comidasTipicas: [
                "Acarajé",
                "Moqueca",
                "Peixe frito"
            ]
        };

        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });

        res.end(JSON.stringify(cidade, null, 2));

        return;
    }

    const caminhoArquivo = path.join(__dirname, "public", rota);

    fs.readFile(caminhoArquivo, (erro, conteudo) => {

        if (erro) {

            res.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });

            fs.readFile(
                path.join(__dirname, "public", "erro.html"),
                (erro404, pagina404) => {

                    if (erro404) {
                        res.end("<h1>Erro 404 - Página não encontrada</h1>");
                    } else {
                        res.end(pagina404);
                    }

                }
            );

            return;
        }

        let tipo = "text/html";

        if (rota.endsWith(".css")) {
            tipo = "text/css";
        }

        res.writeHead(200, {
            "Content-Type": tipo + "; charset=utf-8"
        });

        res.end(conteudo);
    });
});

servidor.listen(PORTA, () => {
    console.log(`Servidor funcionando em http://localhost:${PORTA}`);
});