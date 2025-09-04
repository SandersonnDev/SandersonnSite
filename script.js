document.addEventListener('DOMContentLoaded', () => {
  // Animation scroll avec Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // Gestion des témoignages avec pastilles et switch automatique
  const avisCards = document.querySelectorAll('.avis .cards article');
  const pastilles = document.querySelectorAll('.avis-pastilles button');
  let currentIndex = 0;
  const total = avisCards.length;

  function showAvis(index) {
    avisCards.forEach((card, i) => card.classList.toggle('active', i === index));
    pastilles.forEach((btn, i) => btn.classList.toggle('active', i === index));
    currentIndex = index;
  }

  setInterval(() => {
    let nextIndex = (currentIndex + 1) % total;
    showAvis(nextIndex);
  }, 5000);

  pastilles.forEach(pastille => {
    pastille.addEventListener('click', () => {
      const index = parseInt(pastille.dataset.index, 10);
      showAvis(index);
    });
  });

  showAvis(0);
});

// Modals handling
const buttons = document.querySelectorAll('.btn-details');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');
const contactBtn = document.querySelector('.open-contact');
const modalContact = document.getElementById('modal-contact');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.target).style.display = 'flex';
  });
});

contactBtn.addEventListener('click', e => {
  e.preventDefault();
  modalContact.style.display = 'flex';
});

closes.forEach(close => {
  close.addEventListener('click', () => {
    close.parentElement.parentElement.style.display = 'none';
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
  });
});

document.querySelectorAll('.modal .close').forEach(span => {
  span.addEventListener('click', () => {
    span.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
