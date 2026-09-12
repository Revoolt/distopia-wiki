const search = document.querySelector('#search');
const cards = [...document.querySelectorAll('.card')];
search.addEventListener('input', () => { const q = search.value.toLowerCase(); cards.forEach(card => card.style.display = card.textContent.toLowerCase().includes(q) ? '' : 'none'); });
document.querySelector('#lang').addEventListener('click', e => { e.target.textContent = e.target.textContent === 'EN' ? 'ES' : 'EN'; });
