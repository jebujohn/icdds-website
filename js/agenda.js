document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const agendaDays = document.querySelectorAll('.agenda-day');
    const agendaContainer = document.querySelector('.container'); // Or whatever wraps the agenda days

    function switchTab(dayNum) {
        const btn = document.querySelector(`.tab-btn[data-day="${dayNum}"]`);
        if (!btn) return;

        // Update buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update content
        agendaDays.forEach(day => {
            day.classList.remove('active');
            if (day.getAttribute('id') === `day-${dayNum}`) {
                day.classList.add('active');
            }
        });

        // Scroll to top of agenda on tab switch for better UX
        window.scrollTo({ top: document.querySelector('.agenda-tabs').offsetTop - 100, behavior: 'smooth' });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetDay = btn.getAttribute('data-day');
            switchTab(targetDay);
        });
    });

    // Mobile Swipe Functionality
    let touchstartX = 0;
    let touchendX = 0;
    let touchstartY = 0;
    let touchendY = 0;

    const minSwipeDistance = 50;
    const maxVerticalDiff = 100; // Prevent swipe if user is mostly scrolling vertically

    function handleGesture() {
        const diffX = touchendX - touchstartX;
        const diffY = touchendY - touchstartY;

        if (Math.abs(diffX) > minSwipeDistance && Math.abs(diffY) < maxVerticalDiff) {
            const currentTab = document.querySelector('.tab-btn.active');
            if (!currentTab) return;
            
            let currentDay = parseInt(currentTab.getAttribute('data-day'));
            
            if (diffX < 0) {
                // Swiped left -> Next day
                if (currentDay < tabBtns.length) {
                    switchTab(currentDay + 1);
                }
            } else {
                // Swiped right -> Previous day
                if (currentDay > 1) {
                    switchTab(currentDay - 1);
                }
            }
        }
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        handleGesture();
    }, { passive: true });
});
