import { site, experience, skills, projects, contact } from '../data/content.js'
import { initTheme } from './theme.js'
import '../css/style.css'

initTheme(document.getElementById('theme-toggle'))

const heroName = document.getElementById('hero-name')
const heroRole = document.getElementById('hero-role')
const heroTagline = document.getElementById('hero-tagline')
heroName.textContent = site.name
heroRole.textContent = site.role
heroTagline.textContent = site.tagline

const timeline = document.getElementById('timeline')
timeline.innerHTML = experience
  .map(
    (job) => `
    <div class="job">
      <h3>${job.role} · <span class="company">${job.company}</span></h3>
      <p class="period">${job.period}</p>
      <ul>${job.points.map((p) => `<li>${p}</li>`).join('')}</ul>
    </div>`
  )
  .join('')

const skillsList = document.getElementById('skills')
skillsList.innerHTML = skills.map((s) => `<span class="skill">${s}</span>`).join('')

const projectGrid = document.getElementById('projects')
projectGrid.innerHTML = projects
  .map(
    (p) => `
    <div class="card">
      <h3><a href="${p.link}">${p.name}</a></h3>
      <p>${p.description}</p>
      <div class="tags">${p.tech.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`
  )
  .join('')

document.getElementById('contact-email').textContent = contact.email
document.getElementById('contact-email').href = `mailto:${contact.email}`
document.getElementById('contact-github').href = contact.github

document.getElementById('footer-year').textContent = new Date().getFullYear()
