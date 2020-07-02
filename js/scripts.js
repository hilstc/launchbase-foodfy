const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function() {
        const receitaId = card.getAttribute('id')
        const nomeReceita = card.getAttribute('name')
        const newName = modalOverlay.querySelector('h3')
        
        const chef = card.getAttribute('name2')
        const novoChef = modalOverlay.querySelector('p')
        modalOverlay.classList.add('active')

        modalOverlay.querySelector('img').src = `../img/${receitaId}.png`
        newName.innerHTML = `${nomeReceita}`
        novoChef.innerHTML = `${chef}`
        
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})



