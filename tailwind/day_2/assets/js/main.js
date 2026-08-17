/**
 * ==========================================================================
 * Benefits of Healthy Food - Main JavaScript Logic
 * Features: Dynamic Year, Sticky Navbar, Scroll-Spy, Mobile Nav,
 *           Food Filter Tabs, Smooth Scroll, and Contact Form Feedback.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Dynamic Copyright Year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 2. Sticky Navbar & Back-to-Top Button Scroll Handler
    const navbar = document.getElementById('mainNavbar');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            if (navbar) navbar.classList.add('scrolled');
            if (backToTopBtn) backToTopBtn.classList.add('show');
        } else {
            if (navbar) navbar.classList.remove('scrolled');
            if (backToTopBtn) backToTopBtn.classList.remove('show');
        }

        updateActiveNavLink();
    });

    // 3. Smooth Scroll to Top Function
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Scroll-Spy for Active Navbar Link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function updateActiveNavLink() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // 5. Auto Close Mobile Drawer on Link Click
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarContent');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // 6. Food Categories Filtering (All, Fruits, Vegetables, Protein & Dairy)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const foodCards = document.querySelectorAll('.food-card');

    if (filterButtons.length > 0 && foodCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Reset all filter buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('btn-success', 'bg-brand-600', 'text-white');
                    btn.classList.add('btn-outline-secondary', 'border-slate-200', 'text-slate-700');
                });

                // Activate selected button
                button.classList.remove('btn-outline-secondary', 'border-slate-200', 'text-slate-700');
                button.classList.add('btn-success', 'bg-brand-600', 'text-white');

                const filterValue = button.getAttribute('data-filter');

                // Filter food cards
                foodCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 7. Contact Form Handling with Feedback Alert
    const contactForm = document.getElementById('contactForm');
    const formSuccessAlert = document.getElementById('formSuccessAlert');

    if (contactForm && formSuccessAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formSuccessAlert.classList.remove('d-none');
            contactForm.reset();

            setTimeout(() => {
                formSuccessAlert.classList.add('d-none');
            }, 5000);
        });
    }
});
