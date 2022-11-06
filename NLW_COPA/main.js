function createGame(play1, hour, play2) {
  return `<li>
  <img src="./assets/icon-${play1}.svg" alt="Bandeira do ${play1}" />
  <strong>${hour}</strong>
  <img src="./assets/icon-${play2}.svg" alt="Bandeira da ${play2}" />
</li>`
}

let delay = 0
function creatCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}
  </ul>
</div>
  `
}

document.querySelector('#cards').innerHTML =
  creatCard(
    '24/11',
    'quinta',
    createGame('brazil', '16:00', 'SERBIA') +
      createGame('japan', '13:00', 'portugal')
  ) +
  creatCard('28/11', 'segunda', createGame('switzerland', '13:00', 'brazil')) +
  creatCard('02/12', 'sexta', createGame('brazil', '16:00', 'camaroon'))
