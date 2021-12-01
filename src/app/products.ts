export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoria: string;
}

export const categorias = [
  'camisetas',
  'moletons',
  'bonés',
  'jaquetas',
  'calças',
  'meias',
  'shorts',
  'mochilas',
  'bags',
  'toucas'

]

export const products = [
  {
    id: 1,
    name: 'Camiseta GO.Letters II',
    price: 110.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-6-427x427.jpg",
    categoria: "camisetas",
  },
  {
    id: 2,
    name: 'Camiseta B.T.G.T II',
    price: 60.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/camisetas/camiseta-rexpeita-btgt-2-1-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 3,
    name: 'Moletom Classic',
    price: 240.00,
    description: 'Logo frontal em patch emborrachado',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/moletom-rexpeita-azul-1-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 4,
    name: 'Camiseta HiddenRat',
    price: 121.50,
    description: 'Malha 100% algodão, Bolso Frontal, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-60-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 5,
    name: 'Boné 5panel Three Faces',
    price: 100.0,
    description: 'Tecido 100% algodão, Fecho strapback',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-5panel-3-faces-2-purple-1-1-427x427.jpg",
    categoria: "bonés"
  },
  {
    id: 6,
    name: 'Jaqueta S. Explorer II - Double Face',
    price: 380.0,
    description: 'Dupla Face, Tecido ripstop - 100% poliéster, Possui 9 compartimentos',
    image: "https://www.rexpeita.com.br/image/cache/catalog/nautical-2021/rexpeita-nautical_0024-427x427.jpg",
    categoria: "jaquetas"
  },
  {
    id: 7,
    name: 'Calça Vibration',
    price: 200.0,
    description: 'Tecido ripstop - 100%poliéster, Forro interno de alto conforto, Logo em patch emborrachado',
    image: "https://www.rexpeita.com.br/image/cache/catalog/freq2/rexpeita-calca-vibration-violeta-1-427x427.jpg",
    categoria: "calças"
  },
  {
    id: 8,
    name: 'Camiseta M/L - Half II',
    price: 90.0,
    description: 'Manga Longa - 100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x2x2/_MG_0215b-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 9,
    name: 'Camiseta RXCHAIN',
    price: 109.0,
    description: 'Malha 100% algodão, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/sensory-III-d2/rexpeita-sensory-3-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 10,
    name: 'Moletom Logo - Tie Dye',
    price: 260.0,
    description: 'Moletom 50% algodão 50%poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/sensory-III/rexpeita-sensory-moletom-1111111-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 11,
    name: 'Boné LetterInfame II',
    price: 52.0,
    description: 'Tecido 100% algodão, Fecho snapback, Logo em bordado de alta precisão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/sensory-III/20201019115633__MG_7903-427x427.JPG",
    categoria: "bonés"
  },
  {
    id: 12,
    name: 'Meia RXPT',
    price: 52.0,
    description: 'Item de alto conforto, 78% algodão / 19% poliamida / 3% elastano',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/meias/meia-rexpeita-5-427x427.jpg",
    categoria: "meias"
  },
  {
    id: 13,
    name: 'Camiseta Immortal',
    price: 90.00,
    description: 'Malha 100% algodão, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/camisetas/camiseta-rexpeita-immortal-branca-1-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 14,
    name: 'Short Half II',
    price: 150.00,
    description: 'Tecido ripstop repelente a água - 100% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x2x2/_MG_8026-427x427.JPG",
    categoria: "shorts"
  },
  {
    id: 15,
    name: 'Boné Polo Logo',
    price: 99.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-polo-black-grey-1-1-427x427.jpg",
    categoria: "bonés"
  },
  {
    id: 16,
    name: 'BoardShort RX Pixel',
    price: 80.00,
    description: 'Produzida em nylon stretch',
    image: "https://www.rexpeita.com.br/image/cache/catalog/old-site/verao18-bermuda/V18-BER-03-427x427.jpg",
    categoria: "shorts"
  },
  {
    id: 17,
    name: 'Mochila RXV3 - CAMO',
    price: 75.00,
    description: '3 Compartimentos, Fundo revestido com tecido automotivo resistente à água',
    image: "https://www.rexpeita.com.br/image/cache/catalog/mochilas/rxv3-camo-427x427.jpg",
    categoria: "mochilas"
  },
  {
    id: 18,
    name: 'Moletom Logo - Tie Dye',
    price: 240.00,
    description: 'Moletom 50% algodão 50% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/sensory-III/rexpeita-sensory-moletom-111-1-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 19,
    name: 'Boné 5panel Three Faces',
    price: 100.00,
    description: 'Tecido 100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-5panel-3-faces-2-grey-1-1-427x427.jpg",
    categoria: "bonés"
  },
  {
    id: 20,
    name: 'Meia RX.TAG',
    price: 19.91,
    description: 'Item de alto conforto',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/meias/meia-rexpeita-3-700x700.jpg",
    categoria: "meias"
  },
  {
    id: 20,
    name: 'M.S. Bag.2X21 - Basic',
    price: 100.00,
    description: 'Compartimento protegido com velcro',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/bag/rexpeita-bag-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 21,
    name: 'Crossbody Bag.2X21',
    price: 165.00,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-ballistic-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 22,
    name: 'Touca Logo',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-1-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 23,
    name: 'Touca Logo',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-2-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 24,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-53-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 25,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-5-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 26,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-54-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 27,
    name: 'Crossbody Bag.2X21',
    price: 165.50,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-grey-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 28,
    name: 'Crossbody Bag.2X21',
    price: 165.50,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-purple-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 29,
    name: 'M.S. Bag.2X21',
    price: 150.00,
    description: '100% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/ms-bag-rexpeita-grey-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 30,
    name: 'M.S. Bag.2X21',
    price: 150.00,
    description: '100% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/ms-bag-rexpeita-purple-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 31,
    name: 'Meia INV2X21',
    price: 25.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/meia-rexpeita-inv2x21-cinza-700x700.JPG",
    categoria: "meias"
  },
  {
    id: 32,
    name: 'Meia INV2X21',
    price: 15.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/meia-rexpeita-inv2x21-verde-2-700x700.JPG",
    categoria: "meias"
  },
  {
    id: 33,
    name: 'Calça Classic',
    price: 252.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/rexpeita-calca-700x700.jpg",
    categoria: "calças"
  },
  {
    id: 34,
    name: 'Short Full Cheese',
    price: 200.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/short-moletom-rexpeita-vermelho-700x700.jpg",
    categoria: "shorts"
  },
  
  {
    id: 35,
    name: 'Camiseta Cheese Bomb',
    price: 100.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-26-700x700.jpg",
    categoria: "camisetas"
  },
  {
    id: 36,
    name: 'Camiseta GO.Letters II',
    price: 110.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-6-427x427.jpg",
    categoria: "camisetas",
  },
  {
    id: 37,
    name: 'Camiseta B.T.G.T II',
    price: 60.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/camisetas/camiseta-rexpeita-btgt-2-1-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 38,
    name: 'Moletom Classic',
    price: 240.00,
    description: 'Logo frontal em patch emborrachado',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/moletom-rexpeita-azul-1-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 39,
    name: 'Camiseta HiddenRat',
    price: 121.50,
    description: 'Malha 100% algodão, Bolso Frontal, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-60-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 40,
    name: 'Boné 5panel Three Faces',
    price: 100.0,
    description: 'Tecido 100% algodão, Fecho strapback',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-5panel-3-faces-2-purple-1-1-427x427.jpg",
    categoria: "bonés"
  },
  {
    id: 40,
    name: 'Boné 5panel Three Faces',
    price: 100.0,
    description: 'Tecido 100% algodão, Fecho strapback',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-5panel-3-faces-2-purple-1-1-427x427.jpg",
    categoria: "bonés"
  },
  {
    id: 42,
    name: 'Calça Vibration',
    price: 200.0,
    description: 'Tecido ripstop - 100%poliéster, Forro interno de alto conforto, Logo em patch emborrachado',
    image: "https://www.rexpeita.com.br/image/cache/catalog/freq2/rexpeita-calca-vibration-violeta-1-427x427.jpg",
    categoria: "calças"
  },
  {
    id: 43,
    name: 'Camiseta M/L - Half II',
    price: 90.0,
    description: 'Manga Longa - 100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x2x2/_MG_0215b-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 44,
    name: 'Camiseta RXCHAIN',
    price: 109.0,
    description: 'Malha 100% algodão, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/sensory-III-d2/rexpeita-sensory-3-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 45,
    name: 'Moletom Logo - Tie Dye',
    price: 260.0,
    description: 'Moletom 50% algodão 50%poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/sensory-III/rexpeita-sensory-moletom-1111111-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 46,
    name: 'Boné LetterInfame II',
    price: 52.0,
    description: 'Tecido 100% algodão, Fecho snapback, Logo em bordado de alta precisão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/sensory-III/20201019115633__MG_7903-427x427.JPG",
    categoria: "bonés"
  },
  {
    id: 47,
    name: 'Meia RXPT',
    price: 52.0,
    description: 'Item de alto conforto, 78% algodão / 19% poliamida / 3% elastano',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/meias/meia-rexpeita-5-427x427.jpg",
    categoria: "meias"
  },
  {
    id: 48,
    name: 'Camiseta Immortal',
    price: 90.00,
    description: 'Malha 100% algodão, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/camisetas/camiseta-rexpeita-immortal-branca-1-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 49,
    name: 'Short Half II',
    price: 150.00,
    description: 'Tecido ripstop repelente a água - 100% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x2x2/_MG_8026-427x427.JPG",
    categoria: "shorts"
  },
  {
    id: 50,
    name: 'Boné Polo Logo',
    price: 99.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-polo-black-grey-1-1-427x427.jpg",
    categoria: "bonés"
  },
  {
    id: 51,
    name: 'BoardShort RX Pixel',
    price: 80.00,
    description: 'Produzida em nylon stretch',
    image: "https://www.rexpeita.com.br/image/cache/catalog/old-site/verao18-bermuda/V18-BER-03-427x427.jpg",
    categoria: "shorts"
  },
  {
    id: 52,
    name: 'BoardShort RX Pixel',
    price: 80.00,
    description: 'Produzida em nylon stretch',
    image: "https://www.rexpeita.com.br/image/cache/catalog/old-site/verao18-bermuda/V18-BER-03-427x427.jpg",
    categoria: "shorts"
  },
  {
    id: 53,
    name: 'Moletom Logo - Tie Dye',
    price: 240.00,
    description: 'Moletom 50% algodão 50% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/sensory-III/rexpeita-sensory-moletom-111-1-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 54,
    name: 'Boné 5panel Three Faces',
    price: 100.00,
    description: 'Tecido 100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-5panel-3-faces-2-grey-1-1-427x427.jpg",
    categoria: "bonés"
  },
  
  {
    id: 55,
    name: 'M.S. Bag.2X21 - Basic',
    price: 100.00,
    description: 'Compartimento protegido com velcro',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/bag/rexpeita-bag-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 56,
    name: 'Crossbody Bag.2X21',
    price: 165.00,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-ballistic-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 57,
    name: 'Touca Logo',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-1-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 58,
    name: 'Touca Logo',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-2-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 59,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-53-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 60,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-5-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 61,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-54-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 62,
    name: 'Crossbody Bag.2X21',
    price: 165.50,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-grey-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 63,
    name: 'Crossbody Bag.2X21',
    price: 165.50,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-purple-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 64,
    name: 'M.S. Bag.2X21',
    price: 150.00,
    description: '100% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/ms-bag-rexpeita-grey-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 65,
    name: 'M.S. Bag.2X21',
    price: 150.00,
    description: '100% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/ms-bag-rexpeita-purple-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 66,
    name: 'Meia INV2X21',
    price: 25.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/meia-rexpeita-inv2x21-cinza-700x700.JPG",
    categoria: "meias"
  },
  {
    id: 67,
    name: 'Meia INV2X21',
    price: 15.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/meia-rexpeita-inv2x21-verde-2-700x700.JPG",
    categoria: "meias"
  },
  {
    id: 68,
    name: 'Calça Classic',
    price: 252.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/rexpeita-calca-700x700.jpg",
    categoria: "calças"
  },
  {
    id: 69,
    name: 'Short Full Cheese',
    price: 200.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/short-moletom-rexpeita-vermelho-700x700.jpg",
    categoria: "shorts"
  },
  
  {
    id: 70,
    name: 'Camiseta Cheese Bomb',
    price: 100.00,
    description: '100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-26-700x700.jpg",
    categoria: "camisetas"
  },
  {
    id: 71,
    name: 'Meia RX.TAG',
    price: 19.91,
    description: 'Item de alto conforto',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/meias/meia-rexpeita-3-700x700.jpg",
    categoria: "meias"
  },
  {
    id: 72,
    name: 'Camiseta GO.Letters II',
    price: 110.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-6-427x427.jpg",
    categoria: "camisetas",
  },
  {
    id: 73,
    name: 'Camiseta B.T.G.T II',
    price: 60.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/camisetas/camiseta-rexpeita-btgt-2-1-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 74,
    name: 'Moletom Classic',
    price: 240.00,
    description: 'Logo frontal em patch emborrachado',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/moletom-rexpeita-azul-1-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 75,
    name: 'Camiseta HiddenRat',
    price: 121.50,
    description: 'Malha 100% algodão, Bolso Frontal, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-60-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 76,
    name: 'Boné 5panel Three Faces',
    price: 100.0,
    description: 'Tecido 100% algodão, Fecho strapback',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-5panel-3-faces-2-purple-1-1-427x427.jpg",
    categoria: "bonés"
  },
  {
    id: 77,
    name: 'Camiseta GO.Letters II',
    price: 110.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-6-427x427.jpg",
    categoria: "camisetas",
  },
  {
    id: 78,
    name: 'Camiseta B.T.G.T II',
    price: 60.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/camisetas/camiseta-rexpeita-btgt-2-1-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 79,
    name: 'Moletom Classic',
    price: 240.00,
    description: 'Logo frontal em patch emborrachado',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/moletom-rexpeita-azul-1-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 80,
    name: 'Camiseta HiddenRat',
    price: 121.50,
    description: 'Malha 100% algodão, Bolso Frontal, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-60-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 81,
    name: 'Boné 5panel Three Faces',
    price: 100.0,
    description: 'Tecido 100% algodão, Fecho strapback',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-5panel-3-faces-2-purple-1-1-427x427.jpg",
    categoria: "bonés"
  },
  {
    id: 82,
    name: 'Meia RX.TAG',
    price: 19.91,
    description: 'Item de alto conforto',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/meias/meia-rexpeita-3-700x700.jpg",
    categoria: "meias"
  },
  {
    id: 83,
    name: 'M.S. Bag.2X21 - Basic',
    price: 100.00,
    description: 'Compartimento protegido com velcro',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/bag/rexpeita-bag-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 84,
    name: 'Crossbody Bag.2X21',
    price: 165.00,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-ballistic-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 85,
    name: 'Touca Logo',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-1-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 86,
    name: 'Touca Logo',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-2-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 87,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-53-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 88,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-5-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 89,
    name: 'Touca NO',
    price: 94.50,
    description: 'Logo em patch, Costura de alta qualidade',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/gorros/gorro-rexpeita-54-700x700.jpg",
    categoria: "toucas"
  },
  {
    id: 90,
    name: 'Crossbody Bag.2X21',
    price: 165.50,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-grey-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 91,
    name: 'Crossbody Bag.2X21',
    price: 165.50,
    description: '4 compartimentos protegidos com zíper',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/cb-bag-rexpeita-purple-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 92,
    name: 'M.S. Bag.2X21',
    price: 150.00,
    description: '100% poliéster',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/acessorios/ms-bag-rexpeita-grey-1-700x700.jpg",
    categoria: "bags"
  },
  {
    id: 93,
    name: 'Camiseta GO.Letters II',
    price: 110.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-6-427x427.jpg",
    categoria: "camisetas",
  },
  {
    id: 94,
    name: 'Camiseta B.T.G.T II',
    price: 60.00,
    description: 'Malha 100% algodão.',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/camisetas/camiseta-rexpeita-btgt-2-1-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 95,
    name: 'Moletom Classic',
    price: 240.00,
    description: 'Logo frontal em patch emborrachado',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/moletons/moletom-rexpeita-azul-1-427x427.jpg",
    categoria: "moletons"
  },
  {
    id: 96,
    name: 'Camiseta HiddenRat',
    price: 121.50,
    description: 'Malha 100% algodão, Bolso Frontal, Arte em silk',
    image: "https://www.rexpeita.com.br/image/cache/catalog/drop4-2x21/camisetas/camiseta-rexpeita-60-427x427.jpg",
    categoria: "camisetas"
  },
  {
    id: 97,
    name: 'Boné 5panel Three Faces',
    price: 100.0,
    description: 'Tecido 100% algodão, Fecho strapback',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x21/bones/bone-rexpeita-5panel-3-faces-2-purple-1-1-427x427.jpg",
    categoria: "bonés"
  },
  
  {
    id: 99,
    name: 'Calça Vibration',
    price: 200.0,
    description: 'Tecido ripstop - 100%poliéster, Forro interno de alto conforto, Logo em patch emborrachado',
    image: "https://www.rexpeita.com.br/image/cache/catalog/freq2/rexpeita-calca-vibration-violeta-1-427x427.jpg",
    categoria: "calças"
  },
  {
    id: 100,
    name: 'Camiseta M/L - Half II',
    price: 90.0,
    description: 'Manga Longa - 100% algodão',
    image: "https://www.rexpeita.com.br/image/cache/catalog/inv2x2x2/_MG_0215b-427x427.jpg",
    categoria: "camisetas"
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/