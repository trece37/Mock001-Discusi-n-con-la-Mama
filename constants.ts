import { DataPoint, Recipe, PricePin, Testimonial } from './types';

export const HERO_HEADLINE = "Antes los pollos venían con todo. Hoy compramos la emoción por kilo.";
export const HERO_SUBHEADLINE = "Historias de mesa, precios y hambre de mundo — contadas por una madre que desayunó la mejor fruta en Inglaterra, y por un hijo que no admite conformismos.";

export const DATA_POINTS: DataPoint[] = [
  { id: '1', label: 'Manel', value: '48 años (El Listillo)', icon: 'user', actionLabel: 'Ver perfil' },
  { id: '2', label: 'Madre', value: '67 años (La Realista)', icon: 'user', actionLabel: 'Ver perfil' },
  { id: '3', label: 'El Viaje', value: 'Inglaterra, 1985', icon: 'globe', actionLabel: 'Ver mapa' },
  { id: '4', label: 'Memoria Cultural', value: 'Pollos con vísceras incluidos', icon: 'shopping-cart', actionLabel: 'Leer dato' },
  { id: '5', label: 'Frase Madre', value: '"A mí me gusta lo normal"', icon: 'quote', actionLabel: 'Analizar' },
  { id: '6', label: 'Fenómeno TV', value: 'Pimientos a 7€ (Callejeros)', icon: 'alert', actionLabel: 'Comparar' },
];

export const RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: 'Tamales & Sancocho',
    origin: 'Colombia',
    description: 'Masa de maíz rellena y sopa contundente.',
    memory: 'Probados en un local donde no entraban turistas. El sabor de la resistencia.'
  },
  {
    id: 'r2',
    title: 'Tagine de Cordero',
    origin: 'Marruecos',
    description: 'Cocción lenta, dulce y salado.',
    memory: 'Comprando especias donde te miran a los ojos al regatear.'
  },
  {
    id: 'r3',
    title: 'Sarmale',
    origin: 'Rumanía',
    description: 'Rollitos de repollo rellenos de carne.',
    memory: 'Una boda en Bucarest. Tres días comiendo. La hospitalidad no tiene precio.'
  },
  {
    id: 'r4',
    title: 'Dim Sum',
    origin: 'China',
    description: 'Pequeños bocados al vapor.',
    memory: 'El caos organizado de un domingo por la mañana. Ruido y vapor.'
  }
];

export const PRICE_PINS: PricePin[] = [
  { id: 'p1', location: 'Noruega', item: 'Pimiento Rojo', price: '7.00€ / unidad', context: 'Visto en TV (Callejeros)', top: '20%', left: '45%' },
  { id: 'p2', location: 'Londres (1985)', item: 'Fruta Premium', price: 'Costosa', context: '"La mejor fruta que he comido"', top: '35%', left: '40%' },
  { id: 'p3', location: 'España (1970s)', item: 'Vísceras', price: 'Incluidas', context: 'Se comía todo. Nada se tiraba.', top: '55%', left: '38%' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', user: 'Carlos', age: 52, text: 'Recuerdo cuando el pescado venía envuelto en periódico. Ahora viene en tres capas de plástico.' },
  { id: 't2', user: 'Ana', age: 34, text: 'Mi abuela no entiende por qué pago 4 euros por un aguacate.' },
  { id: 't3', user: 'Elena', age: 65, text: 'Antes lo normal era lo de aquí. Ahora lo normal es lo de fuera.' }
];

export const NARRATIVE_TEXT = [
  {
    type: 'p',
    content: "La conversación empezó como empiezan todas las conversaciones importantes: hablando de dinero y de comida. Mi madre, sesenta y siete años de pragmatismo acumulado, soltó la bomba mientras pelaba una manzana que brillaba demasiado para ser real."
  },
  {
    type: 'quote',
    content: "A mí me gusta lo normal.",
    author: "Madre"
  },
  {
    type: 'p',
    content: "Lo dice con esa seguridad de quien vivió la España de la transición, donde 'normal' significaba seguridad, significaba que no te señalaran. Yo, con mis cuarenta y ocho años y mi etiqueta de 'listillo' colgada al cuello por elección propia, la miré con escepticismo."
  },
  {
    type: 'p',
    content: "Recuerdo cuando era niño. El pollo no era esta bandeja aséptica de pechugas fileteadas. El pollo era un animal. Venía con sus riñones, su hígado, sus vísceras. No comprabas 'higaditos' aparte. Todo formaba parte del trato. Hoy, pagamos un extra por la limpieza, por no ver la muerte, por comprar la emoción de la cocina sin la sangre de la matanza."
  },
  {
    type: 'quote',
    content: "La mejor fruta que probé fue en Inglaterra, hace cuarenta años.",
    author: "Madre, recordando 1985"
  },
  {
    type: 'p',
    content: "Ahí estaba la paradoja. Ella, defensora de 'lo normal', idealizaba un viaje de 1985 a una Inglaterra gris donde, por algún milagro logístico del capitalismo naciente, probó una fruta que aquí no existía. Rechazo Inglaterra por sistema —llámalo prejuicio cultural o envidia histórica— pero entiendo ese deslumbramiento."
  },
  {
    type: 'p',
    content: "Vemos programas tipo 'Callejeros Viajeros'. Nos escandalizamos porque un pimiento rojo vale siete euros en Noruega. Pero no pensamos en la huerta española, en cómo productos que antes eran para alimentar a los cerdos —patatas, cebollas feas— hoy se nos venden como experiencias gourmet en mercados reformados."
  }
];

export const CONCEPTS = [
  "Nostalgia alimentaria", "Globalización", "Capitalismo", "Exportación", "Precios relativos",
  "Memoria familiar", "Cocina internacional", "Mercado vs Súper", "Fenómeno Mediático",
  "Calidad/Precio", "Viajes 1985", "Tradiciones", "Resistencia conservadora", "Curiosidad",
  "Identidad local", "Consumo por imagen", "Sostenibilidad", "Política económica",
  "Conflicto cultural", "Aprendizaje por hostias"
];
