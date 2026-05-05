document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome && email) {
      alert(`Obrigado, ${nome}! Entraremos em contato pelo email: ${email}`);
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
