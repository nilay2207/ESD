// FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach((faqQuestion) => {
    faqQuestion.addEventListener('click', () => {
        faqQuestion.nextElementSibling.classList.toggle('active');
    });
});

// Navbar Scroll Animation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// FAQ Toggle with Animation
document.querySelectorAll('.faq-item h3').forEach((faqQuestion) => {
    faqQuestion.addEventListener('click', () => {
        const answer = faqQuestion.nextElementSibling;
        answer.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.opacity = 0;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = 1;
        }
    });
});

