import { cvContactChannels } from './contactChannels'
import type { CvBundle } from './cvTypes'

export const cvEn: CvBundle = {
  locale: 'en',
  ui: {
    documentTitle: 'Resume — Alexis Archer',
    exportPdf: 'Export as PDF',
    exportHint:
      'In Chrome or Edge, choose « Save as PDF » in A4 format. The date, URL, and page numbers are hidden automatically.',
    profile: 'Profile',
    skills: 'Skills',
    languages: 'Languages',
    experience: 'Experience',
    interests: 'Interests',
    stackLabel: 'Stack',
    toolsLabel: 'Tools',
    linkedInProfile: 'LinkedIn profile',
    githubProfile: 'GitHub',
    langFr: 'FR',
    langEn: 'EN',
    asideAria: 'Skills, languages, and interests',
  },
  contact: {
    fullName: 'Alexis Archer',
    headline:
      'Full-stack developer · AI augmented',
    location: 'Aubagne, Provence-Alpes-Côte d’Azur, France',
    nationality: 'Nationalities: Swiss, French',
    mobility: 'Open to roles in French-speaking Switzerland',
    linkedinUrl: cvContactChannels.linkedinUrl,
  },
  profileParagraphs: [
    'Full-stack JavaScript/TypeScript developer across web and mobile applications, including medtech and health & HR SaaS. I use generative AI, coding assistants, and agentic workflows in my development work.',
    'At Hublo, I own features end to end, from product scoping to production follow-up. I am looking to bring this experience to a product team, especially in French-speaking Switzerland.',
  ],
  languages: [
    { name: 'French', level: 'native' },
    { name: 'English', level: 'professional (documentation, international teams)' },
  ],
  interests: [
    'Strategy games: chess, go, poker — former professional poker player.',
    'Travel.',
    'Political science.',
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
      label: 'Back-end & data',
      items: [
        'Node.js',
        'NestJS',
        'TypeORM',
        'Prisma',
        'PostgreSQL',
        'MongoDB',
        'Microservices architecture',
      ],
    },
    {
      label: 'Quality & delivery',
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
      label: 'AI & development',
      items: [
        'Generative AI & agentic programming (coding assistants, agents, workflows)',
      ],
    },
    {
      label: 'Cross-functional strengths',
      items: [
        'Writing & synthesis (specs, requirements)',
        'Project management',
        'Team management',
        'Intellectual property & contracts',
        'GDPR',
      ],
    },
  ],
  experience: [
    {
      role: 'Full-stack developer',
      company: 'Hublo — French Tech Next40 2026',
      location: 'Paris, France',
      period: 'Sep 2025 – Present',
      stack:
        'TypeScript, JavaScript, React, Material UI, TanStack, NestJS, Prisma, PostgreSQL, Docker, Kubernetes, microservices architecture, DDD, unit and integration tests, Datadog monitoring, AI workflows, CI/CD (team pipeline and practices).',
      bullets: [
        'End-to-end ownership of features for a healthcare SaaS product: scoping with the product manager, product designer, business stakeholders, and engineering teams; design, implementation, deployment, Datadog monitoring, and production follow-up.',
        'Built a Dockerized integration test suite covering the team’s entire microservice, complemented by unit tests.',
        'Provided technical mentoring to a work-study developer across her full scope.',
      ],
    },
    {
      role: 'Full-stack JavaScript developer',
      company: 'Volta Medical',
      location: 'Marseille, France',
      period: 'Apr 2022 – Oct 2025',
      stack:
        'JavaScript, TypeScript, React, Material UI, Node.js, NestJS, PostgreSQL, DDD, unit, integration, API, and end-to-end (e2e) tests.',
      bullets: [
        'Full-stack development on applications and services supporting the care pathway (medtech, devices and related solutions).',
        'Migrated data persistence from AWS to PostgreSQL.',
        'Introduced NestJS as the application framework on Node.js (relevant scope).',
        'Automated testing: unit, integration, API, and e2e; hardened user journeys, technical debt management; collaboration with product and engineering in iterative delivery.',
      ],
    },
    {
      role: 'Web developer',
      company: '5àsec',
      location: 'Aix-en-Provence, France',
      period: 'Nov 2021 – Apr 2022',
      stack:
        'React, React Native, JavaScript (ES6+), Redux, GraphQL, Apollo Client, Material UI, Jest, GraphQL API, Fastlane, GitHub, Jira, TDD, agile.',
      bullets: [
        'Led development for the mobile (5app) and web applications within a retail group.',
      ],
    },
    {
      role: 'Web developer',
      company: 'KPC — Key Performance Consulting',
      location: 'Aix-en-Provence, France',
      period: 'Jul 2021 – Nov 2021',
      stack:
        'React, JavaScript (ES6+), React hooks, Material UI, Node.js, REST, SAP HANA, GitLab, Jira, agile.',
      bullets: [
        'Consulting assignment: delivery of front-end work and services exposing and consuming SAP HANA data.',
      ],
    },
    {
      role: 'Head of digital transformation',
      company: 'Étude généalogique Guénifey',
      location: 'Aix-en-Provence, France',
      period: 'Aug 2020 – Jul 2021',
      stack: 'MongoDB, Express.js, React, Node.js, REST.',
      bullets: [
        'Team leadership (including one developer) and coordination of delivery.',
        'Code and internal process audits; functional scoping: user stories, agile project steering.',
      ],
    },
    {
      role: 'Full-stack web developer',
      company: 'Sokeo',
      location: 'Marseille, France',
      period: 'Mar 2020 – Aug 2020',
      stack: 'JavaScript (ES5/ES6), jQuery, React, Sass, Webpack, PHP 7, CakePHP 3.8 (MVC, built-in ORM).',
      bullets: [
        'End-to-end delivery from requirements to shipped work in a small organization.',
      ],
    },
    {
      role: 'Lawyer — intellectual property & contracts',
      company: 'Public research, innovation, and entrepreneurship support',
      location: 'Marseille, Nantes, Lyon, Bamako, Amman',
      period: 'Sep 2012 – Jul 2020',
      stackKind: 'tools',
      stack:
        'office suites, document management, legal research databases, collaboration platforms (per organization).',
      bullets: [
        'Contract and intellectual property practice (copyright, patents) in research and innovation settings.',
        'Supporting project owners: securing innovations, legal structuring, and negotiation.',
        'Delivery of demanding projects (research, partnerships) and international assignments.',
      ],
    },
  ],
}
