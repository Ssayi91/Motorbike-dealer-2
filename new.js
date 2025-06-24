
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Filter form interaction
        const filterForm = document.querySelector('.filter-container');
        const filterElements = filterForm.querySelectorAll('select, input');
        
        filterElements.forEach(element => {
            element.addEventListener('change', function() {
                // In a real implementation, this would filter the bike listings
                console.log('Filters updated:', {
                    type: document.getElementById('bike-type').value,
                    brand: document.getElementById('brand').value,
                    engine: document.getElementById('engine').value,
                    minPrice: document.getElementById('min-price').value,
                    maxPrice: document.getElementById('max-price').value
                });
            });
        });
 