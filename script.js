document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
      alert(`Navigating to: ${button.textContent}`);
      // Bisa diganti dengan: window.location.href = "https://linktujuan.com"
    });
  });
  