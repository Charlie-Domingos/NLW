let isIgnite = true

function changeCard(event) {
  const card = event.currentTarget
  const backgroundImage = isIgnite
    ? 'url(./assets/bg-explorer.svg)'
    : 'url(./assets/bg-ignite.svg)'

  isIgnite = !isIgnitea
  card.style.background = 'url(./assets/bg-explorer.svg)'
}
