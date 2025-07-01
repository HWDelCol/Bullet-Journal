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

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'pt-br',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      },
      events: [
        {
          title: 'Exemplo de Evento',
          start: new Date().toISOString().split('T')[0]
        }
      ]
    });

    calendar.render();
  }
});