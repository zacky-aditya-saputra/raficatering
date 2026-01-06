// 1. Mobile Menu Toggle
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Close menu when clicking a link
        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }

        // 2. Scroll Animation (Fade In)
        // Menggunakan Intersection Observer API untuk performa yang lebih baik daripada event scroll biasa
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Elemen muncul ketika 10% terlihat
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Hanya animasi sekali
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-in-section');
            fadeElements.forEach(el => observer.observe(el));
        });

        // 3. Navbar Scroll Effect (Optional polish)
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            } else {
                header.style.boxShadow = "none";
            }
        });