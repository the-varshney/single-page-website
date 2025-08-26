document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Typing Effect
    const typingText = document.querySelector('.typing-effect');
    const roles = ["Artworks", "Poetry", "Paintings", "Literature"];
    let roleIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingText.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 120);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 60);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }
    
    type();

    // Scroll Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        for (let i = 0; i < revealElements.length; i++) {
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            } else {
                revealElements[i].classList.remove('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Modal for images
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById("modalImage");
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Ensure modal is hidden on page load
    modal.style.display = 'none';

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = "flex";
            modalImg.src = this.querySelector('img').src;
        });
    });

    const close = document.querySelector(".close");
    close.addEventListener('click', function() {
        modal.style.display = "none";
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});