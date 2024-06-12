var MENU = {
  "acai-creme": [
    {
      id: "creme-300",
      img: "./img/cardapio/creme/300ml.png",
      name: "Glace 300ML",
      dsc: "Glace à l’açai 300ML",
      price: 13.0,
    },
    {
      id: "creme-500",
      img: "./img/cardapio/creme/500ml.png",
      name: "Glace 500ML",
      dsc: "Creme de Acaí 500ML",
      price: 15.0,
    },

    {
      id: "creme-700",
      img: "./img/cardapio/creme/700ml.png",
      name: "Glace 700ML",
      dsc: "Glace à l’açai 700ML",
      price: 18.0,
    },

    {
      id: "creme-1l",
      img: "./img/cardapio/creme/1L.png",
      name: "Glace 1L",
      dsc: "Glace à l’açai 1L",
      price: 30.0,
    },
  ],
  "acai-vitamina": [
    {
      id: "vitamina-300",
      img: "./img/cardapio/vitamina/vitamina.png",
      name: "Vitamine 300ML",
      dsc: "Vitamine d'açai 300ML",
      price: 8.0,
    },

    {
      id: "vitamina-500",
      img: "./img/cardapio/vitamina/vitamina.png",
      name: "Vitamine 500ML",
      dsc: "Vitamine d'açai 500ML",
      price: 12.0,
    },

    {
      id: "vitamina-700",
      img: "./img/cardapio/vitamina/vitamina.png",
      name: "Vitamine 700ML",
      dsc: "Vitamine d'açai 700ML",
      price: 15.0,
    },
  ],
  "milk-shake": [
    {
      id: "milkshake-300",
      img: "./img/cardapio/mikshake/milkshake.png",
      name: "Milk-Shake 300ML",
      dsc: "Milk-Shake 300ML",
      price: 9.0,
    },
    {
      id: "milkshake-500",
      img: "./img/cardapio/mikshake/milkshake.png",
      name: "Milk-Shake 500ML",
      dsc: "Milk-Shake 500ML",
      price: 12.0,
    },
    {
      id: "milkshake-700",
      img: "./img/cardapio/mikshake/milkshake.png",
      name: "Milk-Shake 700ML",
      dsc: "Milk-Shake 700ML",
      price: 15.0,
    },
  ],
};

var ACRESCIMOS = {
  "acrescimos-comum": [
    {
      id: "leite-em-po",
      name: "Lait en poudre",
      price: 2.0,
    },
    // {
    //   id: "leite-condensado",
    //   name: "Leite Condensado",
    //   price: 2.0,
    // },
    {
      id: "morango",
      name: "Fraise",
      price: 2.0,
    },
    // {
    //   id: "pacoca",
    //   name: "Paçoca",
    //   price: 2.0,
    // },
    // {
    //   id: "kiwi",
    //   name: "Kiwi",
    //   price: 2.0,
    // },
    {
      id: "banana",
      name: "Banane",
      price: 2.0,
    },
    {
      id: "granola",
      name: "Granola",
      price: 2.0,
    },
    {
      id: "manga",
      name: "Mangue",
      price: 2.0,
    },
    // {
    //   id: "abacaxi",
    //   name: "Abacaxi",
    //   price: 2.0,
    // },
  ],
  "acrescimos-especiais": [
    // {
    //   id: "bis",
    //   name: "Bis",
    //   price: 3.0,
    // },

    {
      id: "nutella",
      name: "Nutella",
      price: 4.0,
    },
    {
      id: "kit-kat",
      name: "Kit Kat",
      price: 3.5,
    },
    // {
    //   id: "creme-ninho",
    //   name: "Creme de Ninho",
    //   price: 4.0,
    // },
    {
      id: "mouse-maracuja",
      name: "Mouse de Maracujá",
      price: 4.0,
    },
    // {
    //   id: "gotas-chocolate",
    //   name: "Gotas de Chocolate",
    //   price: 2.5,
    // },
    {
      id: "granulado",
      name: "Granulé chocolat",
      price: 2.0,
    },
    {
      id: "mEm",
      name: "M&M's",
      price: 3.0,
    },
    {
      id: "ovomaltine",
      name: "Ovomaltine",
      price: 2.5,
    },
    // {
    //   id: "chocoball",
    //   name: "Chocoball",
    //   price: 2.5,
    // },
  ],
};

var MILK_SHAKE = {
  sorvetes: [
    {
      id: "chocolate",
      name: "Chocolate",
      desc: "sorvete",
    },
    {
      id: "morango",
      name: "Morango",
      desc: "sorvete",
    },
    {
      id: "coco",
      name: "Coco",
      desc: "sorvete",
    },
    {
      id: "sensacao",
      name: "Sensação",
      desc: "sorvete",
    },
    {
      id: "amendoim",
      name: "Amendoim",
      desc: "sorvete",
    },
    {
      id: "bom-bom",
      name: "Bom-Bom",
      desc: "sorvete",
    },
    {
      id: "chicletes",
      name: "Chicletes",
      desc: "sorvete",
    },
    {
      id: "ninho",
      name: "Ninho",
      desc: "sorvete",
    },
    {
      id: "talento",
      name: "Talento",
      desc: "sorvete",
    },

    {
      id: "laka",
      name: "Laka",
      desc: "sorvete",
    },

    {
      id: "limao",
      name: "Limão",
      desc: "sorvete",
    },
  ],
  coberturas: [
    {
      id: "chocolate",
      name: "Chocolate",
      desc: "cobertura",
    },
    {
      id: "morango",
      name: "Morango",
      desc: "cobertura",
    },
    {
      id: "leite-condensado",
      name: "Leite Condensado",
      desc: "cobertura",
    },
    {
      id: "doce-de-leite",
      name: "Doce de Leite",
      desc: "cobertura",
    },
    {
      id: "caramelo",
      name: "Caramelo",
      desc: "cobertura",
    },
    {
      id: "maracuja",
      name: "Maracujá",
      desc: "cobertura",
    },
    {
      id: "uva",
      name: "Uva",
      desc: "cobertura",
    },
  ],
};

// Remover comentario em produção

function recarregarScript() {
  // Obtenha o elemento script existente
  var scriptElement = document.getElementById("dados");
  var scriptElement2 = document.getElementById("appId");

  if (scriptElement) {
    // Remova o script do DOM
    scriptElement.parentNode.removeChild(scriptElement);

    // Crie um novo elemento script
    var novoScript = document.createElement("script");

    // Atribua o mesmo ID para garantir que o novo script seja reconhecido
    novoScript.id = "dados";

    // Atribua o caminho do arquivo ao novo script
    novoScript.src = "./js/dados.js";

    // Adicione o novo script ao final do corpo (ou ao local desejado)
    document.body.appendChild(novoScript);
  } else {
    //console.error('Script não encontrado.');
  }
}

// Armazene o estado do console
var consoleAberto = false;

// Verifique regularmente se o console está aberto
setInterval(function () {
  if (
    window.outerWidth - window.innerWidth > 200 ||
    window.outerHeight - window.innerHeight > 200
  ) {
    carregarDadosNovamente();
  }
}, 5000);

function carregarDadosNovamente() {
  MEU_CARRINHO = [];
  localStorage.setItem("meu_carrinho", JSON.stringify([MEU_CARRINHO]));
  recarregarScript();
  cardapio.metodos.atualizarBadgeTotal();
  //console.log('O console foi aberto..');
}
