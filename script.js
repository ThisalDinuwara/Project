// JavaScript for Kandu Pinnawala Website

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.className = 'bi bi-moon-fill';
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeIcon.className = 'bi bi-moon-fill';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.className = 'bi bi-sun-fill';
            localStorage.setItem('theme', 'light');
        }
    });

    // Product Category Filter
    const categoryButtons = document.querySelectorAll('#categoryFilter .btn');
    const productItems = document.querySelectorAll('.product-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    item.classList.add('fade-in-up');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            productItems.forEach(item => {
                const productName = item.querySelector('.card-title').textContent.toLowerCase();
                const productDescription = item.querySelector('.card-text').textContent.toLowerCase();
                
                if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background Change on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.backgroundColor = body.classList.contains('dark-mode') ? 
                'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.backgroundColor = body.classList.contains('dark-mode') ? 
                'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)';
        }
    });

    // Add to Cart Functionality (Demo)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn') && e.target.closest('.btn').textContent.includes('Add to Cart')) {
            e.preventDefault();
            
            // Create a simple notification
            showNotification('Product added to cart!', 'success');
        }
    });

    // Contact Form Submission
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!firstName || !lastName || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
        });
    }

    // Wishlist Functionality (Demo)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn') && e.target.closest('.btn').querySelector('.bi-heart')) {
            e.preventDefault();
            const heartIcon = e.target.closest('.btn').querySelector('.bi-heart');
            
            if (heartIcon.classList.contains('bi-heart')) {
                heartIcon.classList.remove('bi-heart');
                heartIcon.classList.add('bi-heart-fill');
                heartIcon.style.color = '#dc3545';
                showNotification('Added to wishlist!', 'success');
            } else {
                heartIcon.classList.remove('bi-heart-fill');
                heartIcon.classList.add('bi-heart');
                heartIcon.style.color = '';
                showNotification('Removed from wishlist!', 'info');
            }
        }
    });

    // Loading Animation for Images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.classList.add('loading');
        
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded
        if (img.complete) {
            img.classList.add('loaded');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile Menu Close on Link Click
    const mobileNavLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Back to Top Button (Optional)
    createBackToTopButton();

    // Initialize tooltips if Bootstrap tooltips are needed
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Utility Functions

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Create Back to Top Button
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    backToTopBtn.className = 'btn btn-warning position-fixed';
    backToTopBtn.style.cssText = 'bottom: 30px; right: 30px; z-index: 999; border-radius: 50%; width: 50px; height: 50px; display: none;';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Product Quick View (Demo)
function showProductQuickView(productId) {
    // This would typically fetch product data and show in a modal
    showNotification('Quick view feature coming soon!', 'info');
}

// Newsletter Subscription (Demo)
function subscribeNewsletter(email) {
    if (!email || !email.includes('@')) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    showNotification('Thank you for subscribing to our newsletter!', 'success');
}

// Social Media Share (Demo)
function shareOnSocialMedia(platform, url, text) {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Format Currency (Sri Lankan Rupees)
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR'
    }).format(amount);
}

// Lazy Loading for Images (Alternative to Intersection Observer)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

// Local Storage Utilities
const Storage = {
    set: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    
    get: function(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    
    remove: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    }
};

// Performance Optimization
// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}