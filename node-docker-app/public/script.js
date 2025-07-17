document.getElementById("infoBtn").addEventListener("click", async () => {
  const res = await fetch('/api/info');
  const data = await res.json();
  document.getElementById("result").innerHTML =
    `<p><strong>Auteur :</strong> ${data.author}<br>
     <strong>Projet :</strong> ${data.project}<br>
     <strong>Status :</strong> ${data.status}</p>`;
});

document.getElementById("visitBtn").addEventListener("click", async () => {
  const res = await fetch('/visit');
  const text = await res.text();
  document.getElementById("result").innerText = text;
});
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value,
  };

  try {
    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    if (result.status === 'success') {
      formResponse.textContent = result.message;
      contactForm.reset();
    } else {
      formResponse.textContent = 'Erreur lors de l\'envoi.';
    }
  } catch (error) {
    formResponse.textContent = 'Erreur réseau, réessayez plus tard.';
  }
});
