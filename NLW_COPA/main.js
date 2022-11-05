function createGame(play1, hour, play2) {
  return `<li>
  <img src="./assets/icon-${play1}.svg" alt="Bandeira do ${play1}" />
  <strong>${hour}</strong>
  <img src="./assets/icon-${play2}.svg" alt="Bandeira da ${play2}" />
</li>`
}

function creatCard(date, day, games) {
  return `
  <div class="card">
  <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}
  </ul>
</div>
  `
}

document.querySelector('#app').innerHTML = `
<header><img src="./assets/logo.svg" alt="Logo da NLW" /></header>
<main id="cards">
  ${creatCard(
    '24/11',
    'quinta',
    createGame('brazil', '16:00', 'SERBIA') +
      createGame('japan', '13:00', 'portugal')
  )}
  ${creatCard('28/11', 'segunda', createGame('switzerland', '13:00', 'brazil'))}
  ${creatCard('02/12', 'sexta', createGame('brazil', '16:00', 'camaroon'))}

</main>`
