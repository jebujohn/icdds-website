document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const agendaDays = document.querySelectorAll('.agenda-day');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetDay = btn.getAttribute('data-day');

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update content
            agendaDays.forEach(day => {
                day.classList.remove('active');
                if (day.getAttribute('id') === `day-${targetDay}`) {
                    day.classList.add('active');
                }
            });
        });
    });
});
