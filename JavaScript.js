
//movimiento en los fondos //
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'Img/fondos/pexels-donaldtong94-23474.jpg',
        'Img/fondos/pexels-tdcat-437038.jpg',
        'Img/fondos/pexels-donaldtong94-23475.jpg'
    ];

    const backgroundSlider = document.querySelector('.background-slider');
    let index = 0;

    function updateBackground() {
        backgroundSlider.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    updateBackground();
    setInterval(updateBackground, 5000); 
});



/*-------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
/*-------------------------------------------------*/



const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.testimonial-slider');
let index = 0;

function updateSlider() {
    const width = slider.clientWidth;
    slider.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slider.children.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slider.children.length) % slider.children.length;
    updateSlider();
});


/*-------------------------------------------------*/
window.addEventListener('resize', () => {
    moveSlider(currentIndex);
});

/*-------------------------------------------------*/


document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.navbar a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
});


/*-------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        if (name === '') {
            alert('Por favor, ingresa tu nombre.');
            valid = false;
        }

        if (email === '' || !validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            valid = false;
        }

        if (message === '') {
            alert('Por favor, ingresa tu mensaje.');
            valid = false;
        }

        if (valid) {
            contactForm.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});



