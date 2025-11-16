// Helper para generar reviews
const generateReviews = (productId, count = 5) => {
  const names = ["Carlos M.", "Ana R.", "Luis P.", "María G.", "Diego S.", "Paula L.", "Roberto T.", "Sofía H."];
  const comments = [
    "Excelente producto, superó mis expectativas.",
    "Muy buena calidad, lo recomiendo totalmente.",
    "Perfecto para mis necesidades, muy satisfecho.",
    "Buen precio y excelente rendimiento.",
    "Llegó rápido y en perfectas condiciones.",
    "Calidad premium, vale cada peso.",
    "Increíble, no puedo estar más contento.",
    "Funciona perfectamente, muy recomendado.",
  ];
  
  return Array.from({ length: count }, (_, i) => ({
    id: productId * 100 + i + 1,
    author: names[Math.floor(Math.random() * names.length)],
    rating: 4 + Math.random(),
    comment: comments[Math.floor(Math.random() * comments.length)],
    date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString("es-CL"),
  }));
};

const products = [
  {
    id: 1,
    name: "Notebook Gamer ROG Zephyrus",
    price: 1599900,
    rating: 4.8,
    category: "Notebooks",
    description:
      "Procesador AMD Ryzen 9, 16GB RAM, RTX 4070, pantalla 15.6'' QHD 240Hz.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(1, 6),
  },
  {
    id: 2,
    name: "MacBook Air M3 13''",
    price: 1399990,
    rating: 4.9,
    category: "Notebooks",
    description:
      "Chip Apple M3, 16GB RAM, 512GB SSD, 18 horas de batería y pantalla Liquid Retina.",
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(2, 7),
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    price: 1889990,
    rating: 4.9,
    category: "Smartphones",
    description:
      "Pantalla Super Retina XDR, chip A17 Pro, cámara ProRAW de 48 MP, 256GB.",
    image:
      "https://images.unsplash.com/photo-1695048133176-94de784ef2e9?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(3, 8),
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    price: 1599990,
    rating: 4.7,
    category: "Smartphones",
    description:
      "Pantalla Dynamic AMOLED 2X, cámara 200 MP y suite Galaxy AI para productividad.",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(4, 5),
  },
  {
    id: 5,
    name: "Audífonos Sony WH-1000XM5",
    price: 359990,
    rating: 4.7,
    category: "Audio",
    description:
      "Cancelación de ruido líder, 30 horas de batería, emparejamiento multipunto.",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(5, 6),
  },
  {
    id: 6,
    name: "Parlante Bose SoundLink Flex",
    price: 189990,
    rating: 4.6,
    category: "Audio",
    description:
      "Sonido 360°, resistente al agua IP67 y 12 horas de autonomía, ideal para exterior.",
    image:
      "https://images.unsplash.com/photo-1615412704915-1f81e1b098fd?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(6, 4),
  },
  {
    id: 7,
    name: "Monitor LG UltraWide 34''",
    price: 429990,
    rating: 4.6,
    category: "Monitores",
    description:
      "Panel IPS QHD, HDR10, tasa de refresco 160Hz, ideal para productividad.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(7, 5),
  },
  {
    id: 8,
    name: "Monitor Gamer Odyssey G9 49''",
    price: 999990,
    rating: 4.8,
    category: "Monitores",
    description:
      "Curvatura 1000R, 240Hz, QLED Dual Quad HD, optimizado para experiencias inmersivas.",
    image:
      "https://images.unsplash.com/photo-1587202372616-b43abea06c7c?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(8, 7),
  },
  {
    id: 9,
    name: "Teclado Mecánico Keychron K8 Pro",
    price: 149990,
    rating: 4.5,
    category: "Periféricos",
    description:
      "Switches Gateron G Pro, Bluetooth 5.1, diseño hot-swappable, RGB completo.",
    image:
      "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(9, 4),
  },
  {
    id: 10,
    name: "Mouse Logitech MX Master 3S",
    price: 119990,
    rating: 4.8,
    category: "Periféricos",
    description:
      "Sensor 8K DPI, conectividad multi-dispositivo y scroll MagSpeed silencioso.",
    image:
      "https://images.unsplash.com/photo-1527437934671-61474b530017?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(10, 6),
  },
  {
    id: 11,
    name: "Xbox Series X 1TB",
    price: 549990,
    rating: 4.9,
    category: "Gaming",
    description:
      "4K a hasta 120 FPS, Quick Resume, 1TB SSD y compatibilidad con cuatro generaciones.",
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(11, 8),
  },
  {
    id: 12,
    name: "Kit Casa Inteligente Google Nest",
    price: 219990,
    rating: 4.6,
    category: "Hogar inteligente",
    description:
      "Incluye Nest Hub, bombilla inteligente y sensores, controla tu hogar por voz.",
    image:
      "https://images.unsplash.com/photo-1519566335941-a933f5030c94?auto=format&fit=crop&w=1200&q=80",
    reviews: generateReviews(12, 5),
  },
];

export default products;

