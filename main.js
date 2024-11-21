// Loading Screen Animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        document.getElementById('main-content').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 1000);
    }, 3000);
});

// Hero Section Animation
const hero = document.getElementById('hero');
const heroAnimation = document.getElementById('hero-animation');

hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    heroAnimation.style.setProperty('--mouse-x', `${x}%`);
    heroAnimation.style.setProperty('--mouse-y', `${y}%`);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        document.querySelectorAll('.faq-item').forEach(faqItem => {
            if (faqItem !== item) {
                faqItem.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});

// Footer Animation
const footer = document.querySelector('.footer');

footer.addEventListener('mousemove', (e) => {
    const rect = footer.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    footer.style.setProperty('--mouse-x', `${x}%`);
    footer.style.setProperty('--mouse-y', `${y}%`);
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    e.target.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    // Previous loading screen code
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        document.getElementById('main-content').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 1000);
    }, 3000);
});


