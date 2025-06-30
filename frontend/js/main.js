const botoes = document.querySelectorAll('nav button');
const paineis = document.querySelectorAll('.painel');

botoes.forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.id.replace('btn-', '');
    paineis.forEach((painel) => {
      painel.classList.remove('ativo');
    });
    document.getElementById(id).classList.add('ativo');
  });
});