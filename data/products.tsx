interface PriceTier {
    quantity: number
    price: number
    label: string
  }
  
  interface Product {
    id: number
    name: string
    image: string
    images?: string[]
    originalPrice: number
    salePrice: number
    priceTiers?: PriceTier[]
    discount?: number
    isNew?: boolean
    isBestSeller?: boolean
    description?: string
    features?: string[]
    specifications?: { [key: string]: string }
    colors?: { name?: string; hex: string; image?: string }[]
    materials?: string[]
    minQuantity?: number
    deliveryTime?: string
    rating?: number
    reviewCount?: number
    budgetUrl?: string;
  }
  
  interface ProductCarouselData {
    title: string
    products: Product[]
  }
  
 export const mainCarousel: ProductCarouselData = {
  title: "Canecas e Copos Personalizados",
  products: [
   {
        id: 1,
        name: "CANECA TÉRMICA 1,2L",
        image: "/images/caneca-termica-12l-3-6.webp",
        originalPrice: 35.9,
        salePrice: 25.9,
        discount: 28,
        isNew: true,
        images: ["/images/caneca-termica-12l-3-5.webp", "/images/caneca-termica-12l-3-4.webp", "/images/caneca-termica-12l-3-3.webp", "/images/caneca-termica-12l-3-2.webp"],
        priceTiers: [
          { quantity: 25, price: 90.47, label: "25 unid." },
          { quantity: 50, price: 86.16, label: "50 unid." },
          { quantity: 100, price: 86.16, label: "100 unid." },
          { quantity: 500, price: 80.13, label: "500 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, acessei o sua página de copos e queria orçar CANECA TÉRMICA 1,2L",
        description: "Apresentamos a Caneca Térmica de 1,2L, a solução definitiva para manter sua hidratação sempre na temperatura perfeita. Esqueça o café frio ou a água que perdeu o gelo. Graças à sua construção em Aço Inoxidável 304 com parede dupla, ela preserva o calor ou o frio por horas.",
        features: [
          "Isolamento térmico de longa duração",
          "Tampa rosqueável e antivazamento",
          "Uso facilitado com canudo",
          "Manuseio seguro",
          "Design moderno e funcional",
          "Acessório incluso",
        ],
        specifications: {
          Material: "Aço Inoxidável 304 (parede dupla)",
          Capacidade: "1.2 Litros",
          
        },
        colors: [
          { name: "Preto", hex: "#000000", image: "/images/caneca-termica-12l-3-4.webp" },
          { name: "Branco", hex: "#ffffff", image: "/images/caneca-termica-12l-3-2.webp"},
          { name: "Bege", hex: "#EAE2E0", image: "/images/caneca-termica-12l-3-5.webp" },
          { name: "Cinza", hex: "#7D7F81", image: "/images/caneca-termica-12l-3-2.webp" },
        ],
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Rápida",
        rating: 4.8, // Exemplo de valor diferente
        reviewCount: 124, // Exemplo de valor diferente
      },
      {
        id: 2,
        name: "COPO TÉRMICO 860ML",
        image: "/images/copo-termico-860ml-1-4.webp",
        originalPrice: 45.9,
        salePrice: 35.9,
        discount: 22,
        isBestSeller: true,
        images: ["/images/copo-termico-860ml-1.webp", "/images/copo-termico-860ml-1-2.webp", "/images/copo-termico-860ml-1-3.webp", "/images/copo-termico-860ml-1-4.webp"],
        priceTiers: [
          { quantity: 25, price: 67.79, label: "25 unid." },
          { quantity: 50, price: 64.56, label: "50 unid." },
          { quantity: 100, price: 64.56, label: "100 unid." },
          { quantity: 500, price: 60.04, label: "500 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, acessei o sua página de copos e queria orçar COPO TÉRMICO 860ML",
        description: "Chega de se contentar com bebidas que esquentam rápido. Com o nosso Copo Térmico de 860ml, você tem a garantia de hidratação na temperatura perfeita, sempre trincando",
        features: [
          "Alça de Transporte",
          "Bico Flip",
          "Canudo Interno:",
        ],
        specifications: {
          Material: "Aço Inoxidável com Parede Dupla",
          Capacidade: "860ml",
        },
        colors: [
          { name: "azul", hex: "#003688", image: "/images/copo-termico-860ml-1.webp" },
          { name: "preto", hex: "#060807", image: "/images/copo-termico-860ml-1-2.webp" },
          { name: "branco", hex: "#FFFFFF", image: "/images/copo-termico-860ml-1-2.webp" },
        ],
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Rápida",
        rating: 4.4, // Exemplo de valor diferente
        reviewCount: 376, // Exemplo de valor diferente
      },
      {
        id: 3,
        name: "COPO TÉRMICO INOX 320ML",
        image: "/images/copo-termico-inox-320ml-1-2.webp",
        originalPrice: 28.9,
        salePrice: 22.9,
        discount: 21,
        images: ["/images/copo-termico-inox-320ml-1-5.webp", "/images/copo-termico-inox-320ml-1-6.webp", "/images/copo-termico-inox-320ml-1-7.webp", "/images/copo-termico-inox-320ml-1-8.webp", "/images/copo-termico-inox-320ml-1-10.webp", "/images/copo-termico-inox-320ml-1-11.webp"],
        priceTiers: [
          { quantity: 25, price: 45.36, label: "25 unid." },
          { quantity: 50, price: 43.20, label: "50 unid." },
          { quantity: 100, price: 43.20, label: "100 unid." },
          { quantity: 500, price: 40.18 , label: "500 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, acessei o sua página de copos e queria orçar COPO TÉRMICO INOX 320ML",
        description: "Diga adeus ao café frio na sua mesa! Este copo térmico de 320ml tem o tamanho perfeito para sua dose diária de energia, mantendo sua bebida quente por muito mais tempo.",
        features: [
          "Isolamento Térmico",
          "Capacidade Ideal",
          "Tampa Segura",
          "Consumo Prático",
        ],
        specifications: {
          Material: "Aço Inoxidável",
          Capacidade: "320ml",
        },
        colors: [
          { name: "rosa", hex: "#FF33FE", image: "/images/copo-termico-inox-320ml-1-10.webp" },
          { name: "vermelho",hex: "#FE0000", image: "/images/copo-termico-inox-320ml-1-11.webp" },
          { name: "branco",hex: "#FFFFFF", image: "/images/copo-termico-inox-320ml-1-7.webp" },
          { name: "azul",hex: "#0065CC", image: "/images/copo-termico-inox-320ml-1-6.webp" },
          { name: "preto", hex: "#0A0708", image: "/images/copo-termico-inox-320ml-1-5.webp" },
          { name: "aço", hex: "#bdb7b2", image: "/images/copo-termico-inox-320ml-1-8.webp" },
        ],
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Rápida",
        rating: 4.6,
        reviewCount: 232,
      },
    ],
  };


export const moreOptionsCarousel: ProductCarouselData = {
  title: "Mais Opções de Copos",
  products: [
    {
        id: 4,
        name: "COPO TÉRMICO 500ML",
        image: "/images/copo-termico-500ml-com-abridor-1-5.webp",
        originalPrice: 32.9,
        salePrice: 24.9,
        discount: 24,
        images: ["/images/copo-termico-500ml-com-abridor-1-5.webp", "/images/copo-termico-500ml-com-abridor-1-6.webp", "/images/copo-termico-500ml-com-abridor-1-7.webp" ],
        priceTiers: [
          { quantity: 25, price: 45.11 , label: "25 unid." },
          { quantity: 100, price: 42.96 , label: "100 unid." },
          { quantity: 500, price: 39.95 , label: "500 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, acessei o sua página de copos e queria orçar COPO TÉRMICO 500ML",
        colors: [
          { name: "Preto", hex: "#000000", image: "/images/copo-termico-500ml-com-abridor-1-5.webp" },
        ],
        description: "Apresentamos o copo térmico que vai se tornar o item indispensável no seu happy hour e em todos os momentos de celebração. Com capacidade de 500ml, ele é perfeito para sua cerveja, refrigerante ou suco, mantendo a bebida na temperatura ideal do início ao fim.",
        features: [
          "Capacidade",
          "Material de Qualidade",
          "Acabamento Premium",
          "Tampa Inteligente com Abridor embutido",
        ],
        specifications: {
          Material: "Aço Inoxidável",
          Capacidade: "500ml",
        },
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Rápida",
        rating: 4.9,
        reviewCount: 142,
      },
      {
        id: 5,
        name: "COPO TÉRMICO INOX 380ML",
        image: "/images/copo-termico-inox-380ml-2.webp",
        originalPrice: 55.9,
        salePrice: 45.9,
        discount: 18,
        images: ["/images/copo-termico-inox-380ml-4.webp", "/images/copo-termico-inox-380ml-5.webp", "/images/copo-termico-inox-380ml-6.webp", "/images/copo-termico-inox-380ml-7.webp"],
        priceTiers: [
          { quantity: 25, price: 36.54, label: "25 unid." },
          { quantity: 500, price: 32.36, label: "500 unid." },
          { quantity: 1000, price: 29.9, label: "1000 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, acessei o sua página de copos e queria orçar COPO TÉRMICO INOX 380ML",
        colors: [
          { name: "Preto", hex: "#000000", image: "/images/copo-termico-inox-380ml-7.webp" },
          { name: "branco", hex: "#ffffff", image: "/images/copo-termico-inox-380ml-5.webp" },
          { name: "laranja", hex: "#FC7F03", image: "/images/copo-termico-inox-380ml-6.webp" },
          { name: "azul", hex: "#0065CC", image: "/images/copo-termico-inox-380ml-4.webp" },
        ],
        description: "Esqueça a bagunça de ter um copo para cada ocasião. Apresentamos o Copo Térmico Multiuso 3 em 1, a solução definitiva para manter sua bebida na temperatura perfeita, seja qual for a sua escolha. Com sua parede dupla em aço inox, ele garante o isolamento térmico ideal.",
        features: [
          "Função 3 em 1",
          "Capacidade",
          "Material de Qualidade",
          "Abridor Embutido",
          "Isolamento Térmico",
          "Design Premium",
        ],
        specifications: {
          Material: "Aço Inoxidável",
          Capacidade: "380ml",
        },
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Rápida",
        rating: 4.5,
        reviewCount: 345,
      },
      {
        id: 6,
        name: "GARRAFA INOX 400ML - LED",
        image: "/images/garrafa-termica-400ml-com-display-led-13.webp",
        originalPrice: 89.9,
        salePrice: 69.9,
        colors: [
          { name: "Preto", hex: "#000000", image: "/images/garrafa-termica-400ml-com-display-led.webp" },
          { name: "Branco", hex: "#ffffff", image: "/images/garrafa-termica-400ml-com-display-led-2.webp" },
          { name: "dourado", hex: "#E9C455", image: "/images/garrafa-termica-400ml-com-display-led-5.webp" },
          { name: "rosa", hex: "#FF33FE", image: "/images/garrafa-termica-400ml-com-display-led-3.webp" },
          { name: "azul", hex: "#0065CC", image: "/images/garrafa-termica-400ml-com-display-led-12.webp" },
          { name: "vermelho", hex: "#772c2a", image: "/images/garrafa-termica-400ml-com-display-led-4.webp" },
        ],
        isNew: true,
        images: ["/images/garrafa-termica-400ml-com-display-led.webp", "/images/garrafa-termica-400ml-com-display-led-2.webp", "/images/garrafa-termica-400ml-com-display-led-3.webp", "/images/garrafa-termica-400ml-com-display-led-4.webp", "/images/garrafa-termica-400ml-com-display-led-5.webp", "/images/garrafa-termica-400ml-com-display-led-12.webp"],
        priceTiers: [
          { quantity: 25, price: 44.35 , label: "25 unid." },
          { quantity: 100, price: 42.24 , label: "100 unid." },
          { quantity: 500, price: 42.24 , label: "500 unid." },
          { quantity: 1000, price: 39.28 , label: "1000 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, acessei o sua página de copos e queria orçar GARRAFA INOX 400ML - LED",
        description: "Eleve sua experiência de hidratação a um novo patamar com a Garrafa Térmica Inteligente. Com capacidade de 400ml e corpo em aço inoxidável de parede dupla, ela mantém sua bebida na temperatura ideal por horas.",
        features: [
          "Capacidade",
          "Material de Qualidade",
          "Material de Qualidade",
          "Tampa Inteligente de Led",
          "Acessório Incluso",
          "Isolamento Superior",
        ],
        specifications: {
          Material: "Aço Inoxidável",
          Capacidade: "400ml",
        },
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Rápida",
        rating: 4.7,
        reviewCount: 223,
      }, // <-- Add this closing bracket and comma
      {
        id: 7,
        name: "KIT GARRAFA TÉRMICA",
        image: "/images/kit-garrafa-termica-1-2.webp",
        originalPrice: 35.9,
        salePrice: 28.9,
        discount: 19,
        images: ["/images/kit-garrafa-termica-1-9.webp", "/images/kit-garrafa-termica-1-10.webp", "/images/kit-garrafa-termica-1-11.webp", "/images/kit-garrafa-termica-1-12.webp", "/images/kit-garrafa-termica-1-13.webp", "/images/kit-garrafa-termica-1-14.webp"],
        priceTiers: [
          { quantity: 25, price: 44.35 , label: "25 unid." },
          { quantity: 100, price: 42.24 , label: "100 unid." },
          { quantity: 500, price: 42.24 , label: "500 unid." },
          { quantity: 1000, price: 39.28 , label: "1000 unid." },
        ],
        budgetUrl: "https://tintim.link/whatsapp/826e2a65-3402-47a3-9dae-9e6a55f5ddb5/f4bcfc13-87e4-4dd5-8900-2321d8d02bf0?text=Olá, acessei o sua página de copos e queria orçar KIT GARRAFA TÉRMICA",
        description: "Procurando um presente sofisticado e verdadeiramente útil? Este Kit com Garrafa Térmica é a escolha perfeita. A garrafa de 450ml, produzida em aço inoxidável de alta qualidade, mantém a bebida na temperatura ideal por horas, seja o café quentinho para o clima de Lages ou um chá para relaxar..",
        features: [
          "Kit Completo",
          "Capacidade da Garrafa",
          "Material de Qualidade",
          "Segurança",
          "Embalagem para Presente",
        ],
        specifications: {
          Material: "Aço Inoxidável",
          Capacidade: "1.2 Litros",
        },
        colors: [
          { name: "azul", hex: "#0065CC", image : "/images/kit-garrafa-termica-1-9.webp" },
          { name: "Preto", hex: "#0A0708", image : "/images/kit-garrafa-termica-1-12.webp" },
          { name: "verde", hex: "#01CC33", image : "/images/kit-garrafa-termica-1-14.webp" },
          { name: "bege", hex: "#DCBEB4", image : "/images/kit-garrafa-termica-1-13.webp" },
          { name: "cinza escuro", hex: "#B6B4B0", image : "/images/kit-garrafa-termica-1-11.webp" },
          { name: "cinza escuro", hex: "#707475", image : "/images/kit-garrafa-termica-1-10.webp" },
        ],
        materials: ["Aço Inoxidável"],
        minQuantity: 25,
        deliveryTime: "Rápida",
        rating: 4.8,
        reviewCount: 249,
      },    
  ],
};
