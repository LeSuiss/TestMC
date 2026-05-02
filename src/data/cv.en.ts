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
    linkedinUrl: cvContactChannels.linkedinUrl,
  },
  profileParagraphs: [
    'Full-stack developer with 6+ years’ experience building web and mobile applications in demanding product environments (medtech, retail, health & HR SaaS). Comfortable with software quality expectations, code review, and agile delivery with product teams.',
    'I am looking for full-stack roles in product-led teams with regular release cadences, a strong feedback culture, and ongoing collaboration with business stakeholders.',
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
        'GraphQL / Apollo',
        'Sass',
        'Webpack',
      ],
    },
    {
      label: 'Back-end & data',
      items: ['Node.js', 'TypeORM', 'GraphQL', 'MongoDB'],
    },
    {
      label: 'Quality & delivery',
      items: ['Git (GitHub, GitLab)', 'CI/CD', 'Jest', 'TDD', 'DDD', 'Scrum / agile', 'Jira'],
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
        'TypeScript, JavaScript, React, Material UI, DDD, unit and integration tests, CI/CD (team pipeline and practices).',
      bullets: [
        'Full-stack development on the SaaS product for healthcare professionals and organizations.',
        'Involvement in the delivery cycle: quality, code reviews, unit and integration tests, collaboration with product and engineering.',
        'Contributing to product reliability: investigation, fixes, and integration into the release cadence.',
      ],
    },
    {
      role: 'Full-stack JavaScript developer',
      company: 'Volta Medical',
      location: 'Marseille, France',
      period: 'Apr 2022 – Oct 2025',
      stack:
        'JavaScript, TypeScript, React, Material UI, Node.js, NestJS, PostgreSQL, DDD, in-memory domain tests, unit, integration, API, and end-to-end (e2e) tests.',
      bullets: [
        'Full-stack development on applications and services supporting the care pathway (medtech, devices and related solutions).',
        'Migrated data persistence from AWS to PostgreSQL.',
        'Introduced NestJS as the application framework on Node.js (relevant scope).',
        'Automated testing: in-memory domain tests (DDD), unit, integration, API, and e2e; hardened user journeys, technical debt management; collaboration with product and engineering in iterative delivery.',
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
