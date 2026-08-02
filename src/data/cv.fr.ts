import { cvContactChannels } from './contactChannels'
import type { CvBundle } from './cvTypes'

export const cvFr: CvBundle = {
  locale: 'fr',
  ui: {
    documentTitle: 'CV — Alexis Archer',
    exportPdf: 'Exporter en PDF',
    exportHint:
      'Destination « Enregistrer au format PDF », format A4. Désactive l’option « En-têtes et pieds de page » (Chrome / Edge : plus d’options) pour ne pas imprimer la date, le titre du document ni l’URL (localhost) ni « 1/2 » en bas. Ajuste les marges pour tenir sur deux pages.',
    profile: 'Profil',
    skills: 'Compétences',
    languages: 'Langues',
    experience: 'Expérience',
    interests: 'Centres d’intérêt',
    stackLabel: 'Stack',
    toolsLabel: 'Outils',
    linkedInProfile: 'Profil LinkedIn',
    githubProfile: 'GitHub',
    langFr: 'FR',
    langEn: 'EN',
    asideAria: 'Compétences, langues et centres d’intérêt',
  },
  contact: {
    fullName: 'Alexis Archer',
    headline:
      'Développeur full stack JavaScript · recul juridique & gestion de projets mobilisables lorsque le contexte l’exige',
    location: 'Aubagne, Provence-Alpes-Côte d’Azur, France',
    nationality: 'Nationalités : suisse, française',
    mobility: 'Ouvert à un poste en Suisse romande',
    linkedinUrl: cvContactChannels.linkedinUrl,
  },
  profileParagraphs: [
    'Plus de 6 ans d’expérience dans la conception et l’évolution d’applications web et mobiles, au sein d’environnements produits exigeants (medtech, retail, SaaS santé/RH). Habitué aux exigences de qualité logicielle, à la revue de code et aux livraisons agiles en équipe produit.',
    'Je souhaite rejoindre une équipe orientée produit, avec des cycles de livraison réguliers, une culture du feedback et une collaboration étroite avec les métiers, notamment en Suisse romande.',
  ],
  languages: [
    { name: 'Français', level: 'langue maternelle' },
    { name: 'Anglais', level: 'professionnel (documentation, équipes internationales)' },
  ],
  interests: [
    'Jeux de réflexion : échecs, go, poker — ancien joueur de poker professionnel.',
    'Voyages.',
    'Sciences politiques.',
  ],
  skillGroups: [
    {
      label: 'Front-end',
      items: [
        'React',
        'React Native',
        'JavaScript (ES6+)',
        'TypeScript',
        'Redux',
        'Material UI',
        'TanStack',
      ],
    },
    {
      label: 'Back-end & données',
      items: [
        'Node.js',
        'NestJS',
        'TypeORM',
        'Prisma',
        'PostgreSQL',
        'MongoDB',
        'Architecture microservices',
      ],
    },
    {
      label: 'Qualité & delivery',
      items: [
        'Git (GitHub, GitLab)',
        'CI/CD',
        'Docker',
        'Kubernetes',
        'Datadog',
        'Jest',
        'TDD',
        'DDD',
        'Scrum / agile',
        'Jira',
      ],
    },
    {
      label: 'IA & développement',
      items: [
        'IA générative et programmation agentique (assistants de code, agents, workflows)',
      ],
    },
    {
      label: 'Atouts transverses',
      items: [
        'Rédaction & synthèse (cahiers des charges, specs)',
        'Gestion de projet',
        'Management d’équipe',
        'Propriété intellectuelle & contrats',
        'RGPD',
      ],
    },
  ],
  experience: [
    {
      role: 'Développeur full stack',
      company: 'Hublo — French Tech Next40 2026',
      location: 'Paris (Île-de-France)',
      period: 'Sept. 2025 — Présent',
      stack:
        'TypeScript, JavaScript, React, Material UI, TanStack, NestJS, Prisma, PostgreSQL, Docker, Kubernetes, architecture microservices, DDD, tests unitaires et d’intégration, monitoring Datadog, workflows IA, CI/CD (pipeline et pratiques de l’équipe).',
      bullets: [
        'Ownership de bout en bout de fonctionnalités du SaaS santé : cadrage avec le PM, le product designer, les métiers et les équipes techniques, conception, implémentation, déploiement, monitoring Datadog et suivi en production.',
        'Mise en place d’une suite de tests d’intégration dockerisée couvrant l’intégralité du microservice de l’équipe, complétée par des tests unitaires.',
        'Encadrement technique d’une alternante sur l’intégralité de son périmètre.',
      ],
    },
    {
      role: 'Développeur JavaScript full stack',
      company: 'Volta Medical',
      location: 'Marseille',
      period: 'Avr. 2022 — Oct. 2025',
      stack:
        'JavaScript, TypeScript, React, Material UI, Node.js, NestJS, PostgreSQL, DDD, tests unitaires, d’intégration, d’API et end-to-end (e2e).',
      bullets: [
        'Développement full stack sur des applicatifs et services au service du parcours de soin (medtech, dispositifs et solutions associées).',
        'Migration de la persistance des données depuis AWS vers PostgreSQL.',
        'Mise en place de NestJS comme framework applicatif sur Node.js (périmètre concerné).',
        'Tests automatisés : unitaires, d’intégration, d’API et e2e ; industrialisation des parcours utilisateurs, suivi de la dette technique ; collaboration produit et engineering en livraisons itératives.',
      ],
    },
    {
      role: 'Développeur web',
      company: '5àsec',
      location: 'Aix-en-Provence',
      period: 'Nov. 2021 — Avr. 2022',
      stack:
        'React, React Native, JavaScript (ES6+), Redux, GraphQL, Apollo Client, Material UI, Jest, API GraphQL, Fastlane, GitHub, Jira, TDD, agile.',
      bullets: [
        'Responsabilité du développement pour les applications mobile (5app) et web au sein d’un groupe retail.',
      ],
    },
    {
      role: 'Développeur web',
      company: 'KPC — Key Performance Consulting',
      location: 'Aix-en-Provence',
      period: 'Juil. 2021 — Nov. 2021',
      stack:
        'React, JavaScript (ES6+), hooks React, Material UI, Node.js, REST, SAP HANA, GitLab, Jira, agile.',
      bullets: [
        'Mission en cabinet de conseil : livraison des parties front et des services exposant et consommant les données SAP HANA.',
      ],
    },
    {
      role: 'Responsable transformation digitale',
      company: 'Étude généalogique Guénifey',
      location: 'Aix-en-Provence',
      period: 'Août 2020 — Juil. 2021',
      stack: 'MongoDB, Express.js, React, Node.js, REST.',
      bullets: [
        'Encadrement d’équipe (dont un développeur) et animation du dispositif de delivery.',
        'Audits de code et de processus internes ; cadrage fonctionnel : user stories, pilotage de projet en mode agile.',
      ],
    },
    {
      role: 'Développeur web full stack',
      company: 'Sokeo',
      location: 'Marseille',
      period: 'Mars 2020 — Août 2020',
      stack: 'JavaScript (ES5/ES6), jQuery, React, Sass, Webpack, PHP 7, CakePHP 3.8 (MVC, ORM intégré).',
      bullets: [
        'Conduite du projet du cahier des charges aux livrables au sein d’une petite structure.',
      ],
    },
    {
      role: 'Juriste — propriété intellectuelle & contrats',
      company: 'Recherche publique, innovation et création d’entreprise',
      location: 'Marseille, Nantes, Lyon, Bamako, Amman',
      period: 'Sept. 2012 — Juil. 2020',
      stackKind: 'tools',
      stack:
        'suites bureautiques, gestion documentaire, bases de données juridiques, plateformes de collaboration (selon structures).',
      bullets: [
        'Pratique du droit des contrats et de la propriété intellectuelle (droit d’auteur, brevets) dans des structures de recherche et d’innovation.',
        'Accompagnement de porteurs de projet : sécurisation des innovations, structuration juridique et négociation.',
        'Conduite de projets exigeants (recherche, coopération) et missions à dimension internationale.',
      ],
    },
  ],
}
