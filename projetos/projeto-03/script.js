const frases = [
  "Mesmo no escuro, ainda existe uma razão para seguir em frente.",
  "Às vezes, a maior força é escolher não desistir.",
  "Você pode mudar o final, uma escolha de cada vez.",
  "Todo coração tem uma história que merece ser ouvida.",
  "Mesmo quando estiver sozinho, sua jornada ainda importa.",
  "A gentileza pode ser uma força maior do que qualquer batalha.",
  "Nem todo inimigo precisa terminar como inimigo.",
  "Seu caminho pode ser difícil, mas suas escolhas fazem a diferença.",
  "Há esperança até nos lugares onde você menos espera encontrá-la.",
  "Continue seguindo em frente. Sua história ainda não acabou.",
  "Apesar de tudo, ainda é você!",
  "Às vezes, salvar alguém começa apenas com uma pequena escolha.",
  "Mesmo em um mundo quebrado, ainda podemos encontrar motivos para sorrir.",
  "Você não precisa vencer todas as batalhas para continuar sendo forte.",
  "Talvez o destino não seja algo que você encontra, mas algo que você escreve.",
  "Algumas pessoas entram na nossa história para mudar o rumo dela.",
  "Quando tudo parecer perdido, lembre-se de quem você escolheu ser.",
  "Uma escolha gentil pode ecoar muito além do que você consegue imaginar.",
  "Nem toda escuridão existe para ser temida; algumas escondem caminhos.",
  "Você pode carregar cicatrizes e ainda assim continuar brilhando.",
  "Às vezes, seguir em frente é a maior forma de coragem.",
  "O mundo pode ser estranho, mas isso não significa que você esteja sozinho.",
  "Até os corações mais silenciosos têm algo importante para dizer.",
  "Não importa quantas vezes você caia; sempre existe uma próxima página.",
  "Algumas batalhas são vencidas quando você decide não lutar.",
  "Talvez ser diferente seja justamente aquilo que torna você especial.",
  "Mesmo quando ninguém acredita em você, suas escolhas ainda têm valor.",
  "Há caminhos que só aparecem quando você decide dar o primeiro passo.",
  "O fim de uma história pode ser apenas o começo de outra.",
  "Você não precisa conhecer o caminho inteiro para continuar caminhando.",
  "Enquanto houver uma escolha, ainda existe uma chance."
];

const fraseTexto = document.querySelector (".frase")
const btnFrase = document.querySelector (".btnFrase")

function mostrarFrase() {
    let indice = Math.floor(Math.random() * frases.length)
    fraseTexto.textContent = frases[indice]
}

btnFrase .addEventListener ("click",function(){
   mostrarFrase()
})
