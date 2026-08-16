import { site, experience, skills, education, projects, contact } from '../data/content.js'
import { emailjsConfig } from '../data/config.js'
import { initTheme } from './theme.js'
import { initCarousel } from './carousel.js'
import emailjs from '@emailjs/browser'
import '../css/style.css'

emailjs.init({ publicKey: emailjsConfig.publicKey })

initTheme(document.getElementById('theme-toggle'))

document.getElementById('site-logo').textContent = site.logo
document.title = `${site.name} — ${site.badges[0]?.label || 'Portfolio'}`

const heroGreeting = document.getElementById('hero-greeting')
const heroName = document.getElementById('hero-name')
const heroBadges = document.querySelector('.profile-badges')
const heroTagline = document.getElementById('hero-tagline')
const heroAvatar = document.getElementById('hero-avatar')

heroGreeting.textContent = site.greeting
heroName.textContent = site.name

const badgeColors = [
  'var(--accent)',
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ef4444', // red
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#f97316', // orange
]

site.badges.forEach((badge, i) => {
  const color = badgeColors[i % badgeColors.length]
  const cls = badge.type === 'role' ? 'profile-role' : 'profile-personality'
  const el = document.createElement('p')
  el.className = cls
  el.textContent = badge.label
  el.style.setProperty('--badge-bg', `color-mix(in srgb, ${color} 10%, var(--bg-alt))`)
  el.style.setProperty('--badge-border', `color-mix(in srgb, ${color} 25%, var(--border))`)
  el.style.setProperty('--badge-text', color)
  heroBadges.appendChild(el)
})

heroTagline.textContent = site.tagline

if (site.avatar) {
  heroAvatar.innerHTML = `<img src="${site.avatar}" alt="${site.name}" />`
} else {
  const initials = site.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  heroAvatar.textContent = initials
  heroAvatar.setAttribute('aria-label', site.name)
}

const timeline = document.getElementById('timeline')
timeline.innerHTML = experience
  .map(
    (job) => `
    <div class="job carousel-slide">
      <div class="job-head">
        ${job.companyLogo ? `<img class="job-logo" src="${job.companyLogo}" alt="${job.company}" />` : ''}
        <div>
          <h3>${job.role}</h3>
          <p class="company">${job.company}</p>
          <p class="period">${job.period}</p>
        </div>
      </div>
      <ul>${job.points.map((p) => `<li>${p}</li>`).join('')}</ul>
    </div>`
  )
  .join('')

const skillsList = document.getElementById('skills-list')
skillsList.innerHTML = skills
  .map(
    (group) => `
    <div class="skill-group">
      <h3 class="skill-category">${group.category}</h3>
      <div class="skill-tags">${group.items.map((s) => `<span class="skill">${s}</span>`).join('')}</div>
    </div>`
  )
  .join('')

const educationList = document.getElementById('education-list')
educationList.innerHTML = education
  .map(
    (item) => `
    <div class="education carousel-slide">
      <div class="education-head">
        ${item.schoolLogo ? `<img class="education-logo" src="${item.schoolLogo}" alt="${item.school}" />` : ''}
        <div>
          <h3>${item.degree}</h3>
          <p class="school">${item.school}</p>
          <p class="period">${item.period}</p>
        </div>
      </div>
      <ul>${item.details.map((d) => `<li>${d}</li>`).join('')}</ul>
    </div>`
  )
  .join('')

const projectGrid = document.getElementById('projects-grid')
projectGrid.innerHTML = projects
  .map(
    (p) => `
    <div class="card carousel-slide">
      <div class="card-meta">
        <span class="card-date">${p.date}</span>
        <span class="card-context">${p.context}</span>
      </div>
      <h3><a href="${p.link}">${p.name}</a></h3>
      <p>${p.description}</p>
      <div class="tags">${p.tech.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`
  )
  .join('')

initCarousel(document.getElementById('experience-carousel'))
initCarousel(document.getElementById('education-carousel'))
initCarousel(document.getElementById('projects-carousel'))

const contactEmail = document.getElementById('contact-email')
contactEmail.href = `mailto:${contact.email}`
document.getElementById('contact-github').href = contact.github
document.getElementById('contact-linkedin').href = contact.linkedin

const contactForm = document.getElementById('contact-form')
const formBtn = contactForm.querySelector('button')
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  formBtn.disabled = true
  formBtn.textContent = 'Sending...'

  try {
    await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
      from_name: document.getElementById('cf-name').value.trim(),
      from_email: document.getElementById('cf-email').value.trim(),
      message: document.getElementById('cf-message').value.trim(),
      to_email: contact.email,
    })
    formBtn.textContent = 'Sent!'
    contactForm.reset()
  } catch (err) {
    formBtn.textContent = 'Failed — try again'
    console.error('EmailJS error:', err)
  } finally {
    setTimeout(() => {
      formBtn.disabled = false
      formBtn.textContent = 'Send Message'
    }, 3000)
  }
})

document.getElementById('footer-year').textContent = new Date().getFullYear()
