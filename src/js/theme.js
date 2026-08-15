const STORAGE_KEY = 'theme'

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function initTheme(toggleButton) {
  const apply = (theme) => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
    toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙'
  }

  apply(getInitialTheme())

  toggleButton.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme
    apply(current === 'dark' ? 'light' : 'dark')
  })
}
