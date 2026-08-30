// 1. Alternador de Tema (Dark/Light)
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  
  const icon = themeToggle.querySelector('i');
  icon.className = newTheme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
});

// 2. Filtro de Pesquisa em Tempo Real
const searchInput = document.getElementById('searchInput');
const linkCards = document.querySelectorAll('.link-card');

searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  
  linkCards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    const text = card.textContent.toLowerCase();
    
    if (title.includes(term) || text.includes(term)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});

// 3. Modal e Gerador de QR Code
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const closeBtn = document.querySelector('.close-btn');
const qrContainer = document.getElementById('qrcode');
let qrGenerated = false;

qrBtn.addEventListener('click', () => {
  qrModal.style.display = 'flex';
  if (!qrGenerated) {
    new QRCode(qrContainer, {
      text: window.location.href,
      width: 160,
      height: 160
    });
    qrGenerated = true;
  }
});

closeBtn.addEventListener('click', () => {
  qrModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === qrModal) {
    qrModal.style.display = 'none';
  }
});