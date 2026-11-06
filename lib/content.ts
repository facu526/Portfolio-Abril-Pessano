/**
 * Contenido editable del portfolio.
 * El diseño lee todo desde acá: para sacar, agregar o cambiar textos y videos
 * alcanza con tocar este archivo, sin rehacer componentes.
 */

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "UGC", href: "#que-es-ugc" },
  { label: "¿Por qué trabajar conmigo?", href: "#por-que-trabajar-conmigo" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Trabajemos juntos", href: "#trabajemos-juntos" },
  { label: "Contacto", href: "#contacto" },
];

/**
 * Frames sacados de sus propios videos, para los recortes del moodboard.
 * Cambiar una foto del collage es cambiar la ruta acá.
 */
export const moodFrames = {
  modaSonrisa: "/frames/moda-sonrisa.jpg",
  modaAzul: "/frames/moda-azul.jpg",
  modaSaco: "/frames/moda-saco.jpg",
  skincare: "/frames/skincare-serum.jpg",
  skincareSoft: "/frames/skincare-suave.jpg",
  makeup: "/frames/makeup-sonrisa.jpg",
  makeupPaleta: "/frames/makeup-paleta.jpg",
  ugc: "/frames/ugc-sonrisa.jpg",
  experiencias: "/frames/experiencias-sonrisa.jpg",
  unboxing: "/video-posters/unboxing-1.jpg",
};

export const profile = {
  firstName: "Abril",
  lastName: "Pessano",
  fullName: "Abril Pessano",
  kicker: "UGC Portfolio",
  role: "UGC Creator | Content Creator",
  summary:
    "Formatos UGC pensados para marcas que buscan contenido real, cercano y visual.",
};

export type ContactIconName = "mail" | "instagram" | "tiktok";

export const contactLinks: {
  label: string;
  value: string;
  href: string;
  icon: ContactIconName;
}[] = [
  {
    label: "Mail",
    value: "abrilpessano@gmail.com",
    href: "mailto:abrilpessano@gmail.com",
    icon: "mail",
  },
  {
    label: "Instagram",
    value: "abrupessano",
    href: "https://instagram.com/abrupessano",
    icon: "instagram",
  },
  {
    label: "TikTok",
    value: "abrupessa",
    href: "https://www.tiktok.com/@abrupessa",
    icon: "tiktok",
  },
];

/** Frases que ya existían en el sitio, usadas en la tira que corre bajo el hero. */
export const marqueeItems = [
  "UGC Creator",
  "Content Creator",
  "contenido real",
  "reels + tiktok",
  "Estrategia + estética",
];

export const ugcSection = {
  title: "UGC",
  /** Tomado del texto de su propio video UGC. */
  meaning: "contenido generado por el usuario",
  video: {
    src: "/videos/ugc.mp4",
    poster: "/video-posters/ugc.jpg",
    label: "Video UGC de Abril Pessano",
  },
};

export const whySection = {
  title: "¿Por qué trabajar conmigo?",
  badge: "Estrategia + estética",
  video: {
    src: "/videos/trabajar-conmigo.mp4",
    poster: "/video-posters/trabajar-conmigo.jpg",
    label: "Video sobre por qué trabajar con Abril Pessano",
  },
  contributionsTitle: "Lo que aporto a tu marca",
  contributionsEm: "a tu marca",
};

/** `em` marca la parte que va en serif itálica dentro de cada nota. */
export const brandContributions = [
  { text: "Contenido auténtico y cercano", em: "auténtico" },
  { text: "Hooks que captan atención rápidamente", em: "Hooks" },
  { text: "Edición moderna y dinámica", em: "moderna" },
  { text: "Contenido pensado para conectar y convertir", em: "conectar y convertir" },
];

export const examplesSection = {
  kicker: "Ejemplos",
  title: "Ejemplos de contenido",
  em: "de contenido",
  intro: profile.summary,
};

export type VideoItem = {
  label: string;
  href: string;
  poster: string;
};

export type VideoFrameStyle = "phone" | "polaroid" | "print";

export type VideoCategory = {
  /** Nombre original de la categoría. */
  title: string;
  /** Se usa para el ancla y para elegir la composición en globals.css. */
  slug: string;
  /** Cómo se escribe en grande dentro de su página. */
  headline: string;
  /** Parte del titular que va en serif itálica. */
  em?: string;
  frame: VideoFrameStyle;
  videos: VideoItem[];
};

/** El orden de este array es el orden en que se ven las categorías. */
export const videoCategories: VideoCategory[] = [
  {
    title: "MODA",
    slug: "moda",
    headline: "Moda",
    frame: "print",
    videos: [
      { label: "Video 1", href: "/videos/moda-2.mp4", poster: "/video-posters/moda-2.jpg" },
      { label: "Video 2", href: "/videos/moda-4.mp4", poster: "/video-posters/moda-4.jpg" },
      { label: "Video 3", href: "/videos/moda-5.mp4", poster: "/video-posters/moda-5.jpg" },
      { label: "Video 4", href: "/videos/moda-6.mp4", poster: "/video-posters/moda-6.jpg" },
      { label: "Video 5", href: "/videos/moda-8.mp4", poster: "/video-posters/moda-8.jpg" },
    ],
  },
  {
    title: "ACCESORIOS",
    slug: "accesorios",
    headline: "Accesorios",
    em: "Accesorios",
    frame: "phone",
    videos: [
      { label: "Video 1", href: "/videos/accesorios-1.mp4", poster: "/video-posters/accesorios-1.jpg" },
      { label: "Video 2", href: "/videos/accesorios-2.mp4", poster: "/video-posters/accesorios-2.jpg" },
      { label: "Video 3", href: "/videos/accesorios-3.mp4", poster: "/video-posters/accesorios-3.jpg" },
    ],
  },
  {
    title: "RECOMENDACIÓN",
    slug: "recomendacion",
    headline: "Recomendación",
    em: "Recomendación",
    frame: "phone",
    videos: [
      { label: "Video 1", href: "/videos/recomendacion-1.mp4", poster: "/video-posters/recomendacion-1.jpg" },
      { label: "Video 2", href: "/videos/recomendacion-2.mp4", poster: "/video-posters/recomendacion-2.jpg" },
    ],
  },
  {
    title: "UNBOXING",
    slug: "unboxing",
    headline: "Unboxing",
    frame: "polaroid",
    videos: [
      { label: "Video 1", href: "/videos/unboxing-1.mp4", poster: "/video-posters/unboxing-1.jpg" },
    ],
  },
  {
    title: "MAKE UP",
    slug: "make-up",
    headline: "Make up",
    em: "up",
    frame: "phone",
    videos: [
      { label: "Video 1", href: "/videos/makeup-1.mp4", poster: "/video-posters/makeup-1.jpg" },
      { label: "Video 2", href: "/videos/makeup-2.mp4", poster: "/video-posters/makeup-2.jpg" },
    ],
  },
  {
    title: "SKINCARE",
    slug: "skincare",
    headline: "Skincare",
    em: "care",
    frame: "print",
    videos: [
      { label: "Video 1", href: "/videos/skincare-1.mp4", poster: moodFrames.skincare },
    ],
  },
  {
    title: "EXPERIENCIAS",
    slug: "experiencias",
    headline: "Experiencias",
    em: "Experiencias",
    frame: "polaroid",
    videos: [
      { label: "Video 1", href: "/videos/experiencias-1.mp4", poster: "/video-posters/experiencias-1.jpg" },
      { label: "Video 2", href: "/videos/experiencias-2.mp4", poster: "/video-posters/experiencias-2.jpg" },
      { label: "Video 3", href: "/videos/experiencias-3.mp4", poster: "/video-posters/experiencias-3.jpg" },
    ],
  },
];

export const workTogether = {
  kicker: "TRABAJEMOS JUNTOS",
  title: "Trabajemos juntos",
  em: "juntos",
  lead: "Cada marca tiene una esencia distinta, y mi objetivo es ayudar a",
  leadHighlight: "transmitirla de una manera creativa, actual y alineada con su público.",
  featureTitle: "CONTENIDO AUTÉNTICO Y CERCANO",
  featureText:
    "Me gusta crear contenido que se sienta natural, visualmente atractivo y emocionalmente real, logrando que las personas conecten con el mensaje desde el primer momento.",
  closingBefore: "Disfruto trabajar en proyectos donde puedo aportar",
  closingHighlight: "creatividad, ideas y una mirada estética cuidada",
  closingAfter:
    ", siempre buscando que el contenido tenga impacto y destaque de manera orgánica dentro de plataformas como TikTok e Instagram.",
};

export const contactSection = {
  kicker: "Contacto",
  title: "¿Creamos contenido auténtico para tu marca?",
  em: "auténtico",
};

export const footer = {
  copyright: "© 2026 Abril Pessano · Portfolio",
  tagline: "Contenido, diseño y presencia visual.",
};
