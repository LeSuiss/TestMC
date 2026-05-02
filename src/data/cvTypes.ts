export type CvContact = {
  fullName: string
  headline: string
  location: string
  linkedinUrl: string
  githubUrl?: string
  email?: string
  phone?: string
}

export type CvSkillGroup = {
  label: string
  items: string[]
}

export type CvLanguage = {
  name: string
  level: string
}

export type CvExperience = {
  role: string
  company: string
  period: string
  location?: string
  /** Affiché en premier sous le poste (technos ou outils métier). */
  stack: string
  /** Juriste / hors-dev : libellé « Outils » au lieu de « Stack ». */
  stackKind?: 'tools'
  bullets: string[]
}

export type CvUiLabels = {
  documentTitle: string
  exportPdf: string
  exportHint: string
  profile: string
  skills: string
  languages: string
  experience: string
  interests: string
  /** Libellé devant la ligne stack (expériences tech). */
  stackLabel: string
  /** Libellé pour stackKind tools (ex. juriste). */
  toolsLabel: string
  linkedInProfile: string
  githubProfile: string
  langFr: string
  langEn: string
  asideAria: string
}

export type CvBundle = {
  locale: 'fr' | 'en'
  ui: CvUiLabels
  contact: CvContact
  profileParagraphs: string[]
  languages: CvLanguage[]
  interests: string[]
  skillGroups: CvSkillGroup[]
  experience: CvExperience[]
}
