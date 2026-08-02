/**
 * Coordonnées affichées sur le CV et l’export PDF (FR / EN).
 * Les variables VITE_CV_* dans `.env` remplacent ces valeurs si elles sont renseignées.
 */
export const cvContactChannels = {
  email: 'archer.alexis@hotmail.fr',
  /** Format international lisible et directement exploitable par le lien tel:. */
  phone: '+33 7 63 79 88 82',
  linkedinUrl: 'https://www.linkedin.com/in/alexis-archer-151179138/',
  /** Profil public (sans slash final). À ajuster si ton handle GitHub diffère. */
  githubUrl: 'https://github.com/alexis-archer',
} as const
