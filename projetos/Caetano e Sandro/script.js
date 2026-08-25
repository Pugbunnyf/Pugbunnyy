let CScampoPalavra = document.querySelector(".CScampoPalavra");
let CSbotaoEnviar = document.querySelector(".CSbotaoEnviar");
let CSbotaoReiniciar = document.querySelector(".CSbotaoReiniciar");
let CSbotaoFechar = document.querySelector(".CSbotaoFechar");
let CStentativaAtualTexto = document.querySelector(".CStentativaAtual");
let CSmensagem = document.querySelector(".CSmensagem");
let CSlinhas = document.querySelectorAll(".CSlinha");
let CStelaResultado = document.querySelector(".CStelaResultado");
let CStituloResultado = document.querySelector(".CStituloResultado");
let CSpalavrasSecretas = ["ANDAR", "CASAS", "POBRE", "PEDRA", "NUVEM", "JOGOS", "NOITE", "VERDE", "AURAS", "MARTE"];
let CSpalavraSecreta = "";
let CStentativaAtual = 0;
let CSnumeroMaximoTentativas = 6;
let CSjogoTerminou = false;
let CStempoResultado = null;

function CSescolherPalavra() {

    let CSnumeroAleatorio = Math.floor(
        Math.random() * CSpalavrasSecretas.length
    );


    CSpalavraSecreta =
        CSpalavrasSecretas[CSnumeroAleatorio];

    console.log("Palavra secreta:", CSpalavraSecreta);
}

function CSenviarPalavra() {

    if (CSjogoTerminou === true) {
        return;
    }


    let CSpalavraDigitada = CScampoPalavra.value
        .trim()
        .toUpperCase();

    if (CSpalavraDigitada.length !== 5) {

        CSmensagem.textContent =
            "Digite uma palavra com 5 letras.";

        CScampoPalavra.focus();

        return;
    }


    CSmensagem.textContent = "";


    let CSlinhaAtual =
        CSlinhas[CStentativaAtual];
    let CSquadrados =
        CSlinhaAtual.querySelectorAll(".CSquadrado");
    let CSpalavraDisponivel =
        CSpalavraSecreta.split("");
    let CSresultadoLetras = [
        "CSletraErrada",
        "CSletraErrada",
        "CSletraErrada",
        "CSletraErrada",
        "CSletraErrada"
    ];

    for (let CSi = 0; CSi < 5; CSi++) {

        CSquadrados[CSi].textContent =
            CSpalavraDigitada[CSi];
    }

    for (let CSi = 0; CSi < 5; CSi++) {

        if (
            CSpalavraDigitada[CSi] ===
            CSpalavraSecreta[CSi]
        ) {

            CSresultadoLetras[CSi] =
                "CSletraCerta";


            CSpalavraDisponivel[CSi] = null;
        }
    }

    for (let CSi = 0; CSi < 5; CSi++) {

        if (
            CSresultadoLetras[CSi] !==
            "CSletraCerta"
        ) {

            let CSposicaoEncontrada =
                CSpalavraDisponivel.indexOf(
                    CSpalavraDigitada[CSi]
                );


            if (CSposicaoEncontrada !== -1) {

                CSresultadoLetras[CSi] =
                    "CSletraLugarErrado";


                CSpalavraDisponivel[
                    CSposicaoEncontrada
                ] = null;
            }
        }
    }

    for (let CSi = 0; CSi < 5; CSi++) {

        CSquadrados[CSi].classList.add(
            CSresultadoLetras[CSi]
        );
    }

    CStentativaAtual++;


    CScampoPalavra.value = "";

    if (
        CSpalavraDigitada ===
        CSpalavraSecreta
    ) {

        CSjogoTerminou = true;


        CStentativaAtualTexto.textContent =
            CStentativaAtual;


        CStempoResultado = setTimeout(
            function() {

                CSmostrarVitoria();

            },
            500
        );


        return;
    }

    if (
        CStentativaAtual >=
        CSnumeroMaximoTentativas
    ) {

        CSjogoTerminou = true;


        CStentativaAtualTexto.textContent = 6;


        CStempoResultado = setTimeout(
            function() {

                CSmostrarDerrota();

            },
            500
        );


        return;
    }

    CStentativaAtualTexto.textContent =
        CStentativaAtual + 1;


    CScampoPalavra.focus();
}

function CSmostrarVitoria() {

    CStelaResultado.classList.remove("CSescondido")
    CStelaResultado.classList.remove("CStelaDerrota")
    CStelaResultado.classList.add("CStelaVitoria");
    CStituloResultado.textContent = "Vitória"
}

function CSmostrarDerrota() {
    CStelaResultado.classList.remove("CSescondido")
    CStelaResultado.classList.remove("CStelaVitoria");
    CStelaResultado.classList.add("CStelaDerrota"
)

    CStituloResultado.textContent ="Derrota";
}

function CSreiniciarJogo() {

    if (CStempoResultado !== null) {
        clearTimeout(CStempoResultado);
        CStempoResultado = null;
    }

    CStentativaAtual = 0
    CSjogoTerminou = false
    CSescolherPalavra();
    CStentativaAtualTexto.textContent = 1;
    CScampoPalavra.value = ""
    CSmensagem.textContent = ""
    CStelaResultado.classList.add("CSescondido");
    CStelaResultado.classList.remove(
        "CStelaVitoria"
    )


    CStelaResultado.classList.remove(
        "CStelaDerrota"
    );

    for (
        let CSi = 0;
        CSi < CSlinhas.length;
        CSi++
    ) {

        let CSquadrados =
            CSlinhas[CSi].querySelectorAll(
                ".CSquadrado"
            );

        for (
            let CSj = 0;
            CSj < CSquadrados.length;
            CSj++
        ) {

            CSquadrados[CSj].textContent = "";


            CSquadrados[CSj].classList.remove(
                "CSletraErrada"
            );


            CSquadrados[CSj].classList.remove(
                "CSletraLugarErrado"
            );


            CSquadrados[CSj].classList.remove(
                "CSletraCerta"
            );
        }
    }

    CScampoPalavra.focus();
}
CScampoPalavra.addEventListener(
    "input",
    function() {

        CScampoPalavra.value =
            CScampoPalavra.value
                .replace(
                    /[^a-zA-Z]/g,
                    ""
                )
                .toUpperCase();
    }
);

CSbotaoEnviar.addEventListener(
    "click",
    function() {

        CSenviarPalavra();
    }
);


CScampoPalavra.addEventListener(
    "keydown",
    function(CSevento) {

        if (CSevento.key === "Enter") {

            CSenviarPalavra();
        }
    }
);

CSbotaoReiniciar.addEventListener(
    "click",
    function() {

        CSreiniciarJogo();
    }
);

CSbotaoFechar.addEventListener(
    "click",
    function() {

        CSreiniciarJogo();
    }
);

CSescolherPalavra();
CScampoPalavra.focus();