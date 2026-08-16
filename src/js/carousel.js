function getPerView(container) {
  const configured = Number(container.dataset.perView) || 1
  if (configured > 1 && window.innerWidth <= 640) return 1
  return configured
}

export function initCarousel(container) {
  const track = container.querySelector('.carousel-track')
  const items = [...track.children]
  const nav = container.querySelector('.carousel-nav')
  const prevBtn = container.querySelector('.carousel-prev')
  const nextBtn = container.querySelector('.carousel-next')
  const counter = container.querySelector('.carousel-counter')
  let page = 0

  function totalPages() {
    const perView = getPerView(container)
    return Math.max(1, Math.ceil(items.length / perView))
  }

  function update() {
    const perView = getPerView(container)
    const pages = totalPages()
    page = Math.min(page, pages - 1)

    track.style.transform = `translateX(-${page * 100}%)`

    if (counter) counter.textContent = `${page + 1} / ${pages}`
    if (prevBtn) prevBtn.disabled = page === 0
    if (nextBtn) nextBtn.disabled = page >= pages - 1
    if (nav) nav.hidden = items.length <= perView
  }

  prevBtn?.addEventListener('click', () => {
    page -= 1
    update()
  })

  nextBtn?.addEventListener('click', () => {
    page += 1
    update()
  })

  window.addEventListener('resize', update)
  update()
}
