
export default function handler(req, res) {
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

    res.status(200).json(cidade);
}
