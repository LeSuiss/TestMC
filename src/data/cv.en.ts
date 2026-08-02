import { cvContactChannels } from './contactChannels'
import type { CvBundle } from './cvTypes'

export const cvEn: CvBundle = {
  locale: 'en',
  ui: {
    documentTitle: 'Resume — Alexis Archer',
    exportPdf: 'Export as PDF',
    exportHint:
      'Choose « Save as PDF », A4. Turn off « Headers and footers » (Chrome / Edge: More settings) so the date, document title, localhost URL, and page numbers (e.g. 1/2) are not printed. Adjust margins to fit two pages.',
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
      'Full-stack JavaScript developer · legal perspective & project management available when the context calls for it',
    location: 'Aubagne, Provence-Alpes-Côte d’Azur, France',
    nationality: 'Nationalities: Swiss, French',
    mobility: 'Open to roles in French-speaking Switzerland',
    linkedinUrl: cvContactChannels.linkedinUrl,
  },
  profileParagraphs: [
    'Over 6 years’ experience designing and evolving web and mobile applications in demanding product environments (medtech, retail, health & HR SaaS). Comfortable with software quality expectations, code review, and agile delivery within product teams.',
    'I am looking to join a product-led team with regular delivery cycles, a strong feedback culture, and close collaboration with business stakeholders, especially in French-speaking Switzerland.',
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
      company: 'Hublo',
      location: 'Paris, France',
      period: 'Sep 2025 – Present',
      stack:
        'TypeScript, JavaScript, React, Material UI, TanStack, NestJS, Prisma, PostgreSQL, microservices architecture, DDD, unit and integration tests, Datadog monitoring, AI workflows, CI/CD (team pipeline and practices).',
      bullets: [
        'End-to-end ownership of features for a healthcare SaaS product: scoping with the product manager, product designer, business stakeholders, and engineering teams; design, implementation, deployment, Datadog monitoring, and production follow-up.',
        'Designed and developed the complete data-list export system, including shared filters, CSV generation, and consistent behavior across lists, exports, and dependent features.',
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
