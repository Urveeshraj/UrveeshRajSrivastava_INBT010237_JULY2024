document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sign-up-form');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for signing up! Here is your 10% discount coupon: URVEESH-10');
    });


    function showSlide(index) {
        const slider = document.querySelector('.slider');
        if (slides.length === 0) return; 
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100 / slides.length}%)`;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });


    let slideInterval = setInterval(function() {
        showSlide(currentIndex + 1);
    }, 3500);


    let slideIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    function showTestimonial(n) {
        if (totalTestimonials === 0) return; 
        testimonials.forEach((testimonial) => testimonial.classList.remove('active'));
        testimonials[n].classList.add('active');
    }

    function nextTestimonial() {
        slideIndex = (slideIndex + 1) % totalTestimonials;
        showTestimonial(slideIndex);
    }

    function prevTestimonial() {
        slideIndex = (slideIndex - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(slideIndex);
    }


    let testimonialInterval = setInterval(function() {
        nextTestimonial();
    }, 3500);


    document.getElementById('next').addEventListener('click', function() {
        clearInterval(testimonialInterval);
        nextTestimonial();
        testimonialInterval = setInterval(nextTestimonial, 3500);
    });

    document.getElementById('prev').addEventListener('click', function() {
        clearInterval(testimonialInterval);
        prevTestimonial();
        testimonialInterval = setInterval(prevTestimonial, 3500);
    });


    showTestimonial(slideIndex);

    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
