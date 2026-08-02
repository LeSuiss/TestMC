import './CvPage.css'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { getCvBundle, type CvExperience } from '../data/cvData'

function readInitialLocale(): 'fr' | 'en' {
  const params = new URLSearchParams(window.location.search)
  return params.get('lang') === 'en' ? 'en' : 'fr'
}

function frenchMobileDigits(visiblePhone: string): string {
  return visiblePhone.replace(/\D/g, '')
}

/** Mobile français 0X… → `tel:+33…` pour clics fiables (mobile / WhatsApp, etc.). */
function buildTelHref(visiblePhone: string): string {
  const d = frenchMobileDigits(visiblePhone)
  if (d.length === 10 && d.startsWith('0')) {
    return `tel:+33${d.slice(1)}`
  }
  if (d.length >= 9 && d.startsWith('33')) {
    return `tel:+${d}`
  }
  return `tel:${d}`
}

/** Forme +33 … lisible sur le CV et dans le PDF. */
function frenchMobileInternationalDisplay(visiblePhone: string): string {
  const d = frenchMobileDigits(visiblePhone)
  if (d.length === 10 && d.startsWith('0')) {
    const rest = d.slice(1)
    return `+33 ${rest.slice(0, 1)} ${rest.slice(1, 3)} ${rest.slice(3, 5)} ${rest.slice(5, 7)} ${rest.slice(7)}`
  }
  if (d.startsWith('33') && d.length === 11) {
    const rest = d.slice(2)
    return `+33 ${rest.slice(0, 1)} ${rest.slice(1, 3)} ${rest.slice(3, 5)} ${rest.slice(5, 7)} ${rest.slice(7)}`
  }
  return visiblePhone.trim()
}

export function CvPage() {
  const [locale, setLocale] = useState<'fr' | 'en'>(readInitialLocale)
  const cv = useMemo(() => getCvBundle(locale), [locale])
  const { contact, experience, interests, languages, profileParagraphs, skillGroups, ui } = cv
  const stackKicker = (kind: CvExperience['stackKind']) =>
    kind === 'tools' ? ui.toolsLabel : ui.stackLabel

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = ui.documentTitle
    const url = new URL(window.location.href)
    url.searchParams.set('lang', locale)
    window.history.replaceState({}, '', url.toString())
  }, [locale, ui.documentTitle])

  const handlePrint = useCallback(() => {
    const titleToRestore = ui.documentTitle
    const clearTitle = '\u200B'
    const restore = () => {
      document.title = titleToRestore
      window.removeEventListener('afterprint', restore)
    }
    window.addEventListener('afterprint', restore)
    document.title = clearTitle
    window.print()
    window.setTimeout(() => {
      if (document.title === clearTitle) {
        restore()
      }
    }, 2000)
  }, [ui.documentTitle])

  return (
    <div className="cv-page">
      <div className="cv-toolbar">
        <div className="cv-toolbar-row">
          <div className="cv-toolbar-lang" role="group" aria-label="Language">
            <button
              type="button"
              className={`cv-lang-btn${locale === 'fr' ? ' is-active' : ''}`}
              onClick={() => setLocale('fr')}
              aria-pressed={locale === 'fr'}
            >
              {ui.langFr}
            </button>
            <button
              type="button"
              className={`cv-lang-btn${locale === 'en' ? ' is-active' : ''}`}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              {ui.langEn}
            </button>
          </div>
          <button type="button" className="cv-print-btn" onClick={handlePrint}>
            {ui.exportPdf}
          </button>
        </div>
        <p className="cv-toolbar-hint">{ui.exportHint}</p>
      </div>

      <article className="cv-sheet" aria-label={locale === 'fr' ? 'Curriculum vitae' : 'Resume'}>
        <div className="cv-inner">
          <header className="cv-header">
            <h1 className="cv-name">{contact.fullName}</h1>
            <p className="cv-headline">{contact.headline}</p>
            <ul className="cv-contact">
              <li>{contact.location}</li>
              {contact.nationality ? <li>{contact.nationality}</li> : null}
              {contact.mobility ? <li>{contact.mobility}</li> : null}
              <li>
                <a
                  href={contact.linkedinUrl}
                  className="cv-contact-link-external"
                  aria-label={`${ui.linkedInProfile} — ${contact.linkedinUrl}`}
                >
                  <span className="cv-contact-link-label">{ui.linkedInProfile}</span>
                  <span className="cv-contact-print-url" aria-hidden="true">
                    {' — '}
                    {contact.linkedinUrl}
                  </span>
                </a>
              </li>
              {contact.githubUrl ? (
                <li>
                  <a
                    href={contact.githubUrl}
                    className="cv-contact-link-external"
                    aria-label={`${ui.githubProfile} — ${contact.githubUrl}`}
                  >
                    <span className="cv-contact-link-label">{ui.githubProfile}</span>
                    <span className="cv-contact-print-url" aria-hidden="true">
                      {' — '}
                      {contact.githubUrl}
                    </span>
                  </a>
                </li>
              ) : null}
              {contact.email ? (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              ) : null}
              {contact.phone ? (
                <li>
                  <a
                    href={buildTelHref(contact.phone)}
                    className="cv-contact-link-tel"
                    aria-label={frenchMobileInternationalDisplay(contact.phone)}
                  >
                    <span className="cv-contact-link-label">{contact.phone}</span>
                    {contact.phone.trim() !== frenchMobileInternationalDisplay(contact.phone) ? (
                      <span className="cv-contact-print-url" aria-hidden="true">
                        {' — '}
                        {frenchMobileInternationalDisplay(contact.phone)}
                      </span>
                    ) : null}
                  </a>
                </li>
              ) : null}
            </ul>
          </header>

          <div className="cv-grid">
            <aside className="cv-sidebar" aria-label={ui.asideAria}>
              <section>
                <h2 className="cv-section-title">{ui.skills}</h2>
                {skillGroups.map((group) => (
                  <div key={group.label} className="cv-skill-group">
                    <p className="cv-skill-label">{group.label}</p>
                    <ul className="cv-skill-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {languages.length > 0 ? (
                <section>
                  <h2 className="cv-section-title">{ui.languages}</h2>
                  <ul className="cv-lang-list">
                    {languages.map((lang) => (
                      <li key={lang.name}>
                        <span className="cv-lang-name">{lang.name}</span>
                        <span className="cv-lang-sep"> — </span>
                        <span className="cv-lang-level">{lang.level}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {interests.length > 0 ? (
                <section>
                  <h2 className="cv-section-title">{ui.interests}</h2>
                  <ul className="cv-interests-list">
                    {interests.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </aside>

            <div className="cv-main">
              <section aria-label={ui.profile}>
                <h2 className="cv-section-title">{ui.profile}</h2>
                {profileParagraphs.map((paragraph) => (
                  <p key={paragraph} className="cv-profile">
                    {paragraph}
                  </p>
                ))}
              </section>

              <section aria-label={ui.experience}>
                <h2 className="cv-section-title">{ui.experience}</h2>
                {experience.map((job) => (
                  <article key={`${job.company}-${job.period}`} className="cv-job">
                    <header className="cv-job-header">
                      <h3 className="cv-job-title">
                        <span className="cv-job-role">{job.role}</span>
                        <span className="cv-job-title-sep" aria-hidden>
                          {' '}
                          ·{' '}
                        </span>
                        <span className="cv-job-company">{job.company}</span>
                      </h3>
                      <p className="cv-job-meta">
                        {job.period}
                        {job.location ? ` · ${job.location}` : ''}
                      </p>
                    </header>
                    <p className="cv-job-stack">
                      <span className="cv-job-stack-kicker">{stackKicker(job.stackKind)}</span>
                      <span className="cv-job-stack-sep" aria-hidden>
                        {' '}
                        —{' '}
                      </span>
                      <span className="cv-job-stack-text">{job.stack}</span>
                    </p>
                    <ul className="cv-job-bullets">
                      {job.bullets.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
