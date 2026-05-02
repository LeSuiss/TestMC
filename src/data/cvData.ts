import { cvContactChannels } from './contactChannels'
import { cvEn } from './cv.en'
import { cvFr } from './cv.fr'
import type { CvBundle, CvContact } from './cvTypes'

export type { CvBundle, CvContact, CvExperience, CvLanguage, CvSkillGroup, CvUiLabels } from './cvTypes'

function resolveContactChannels(base: CvContact): Partial<CvContact> {
  const envEmail = import.meta.env.VITE_CV_EMAIL?.trim()
  const envPhone = import.meta.env.VITE_CV_PHONE?.trim()
  const envGithub = import.meta.env.VITE_CV_GITHUB_URL?.trim()
  const envLinkedin = import.meta.env.VITE_CV_LINKEDIN_URL?.trim()
  const fileEmail = cvContactChannels.email.trim()
  const filePhone = cvContactChannels.phone.trim()
  const fileGithub = cvContactChannels.githubUrl.trim()
  const fileLinkedin = cvContactChannels.linkedinUrl.trim()
  const email = envEmail || fileEmail
  const phone = envPhone || filePhone
  const githubUrl = envGithub || fileGithub
  const linkedinUrl = envLinkedin || fileLinkedin || base.linkedinUrl
  return {
    ...(email ? { email } : {}),
    ...(phone ? { phone } : {}),
    ...(githubUrl ? { githubUrl } : {}),
    linkedinUrl,
  }
}

/** Contenu CV selon la langue ; coordonnées : `contactChannels.ts` puis `.env` (prioritaire). */
export function getCvBundle(locale: 'fr' | 'en'): CvBundle {
  const base = locale === 'en' ? cvEn : cvFr
  return {
    ...base,
    contact: {
      ...base.contact,
      ...resolveContactChannels(base.contact),
    },
  }
}
