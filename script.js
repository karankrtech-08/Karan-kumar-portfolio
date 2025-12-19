// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Toggle icon between bars and times
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Show/hide back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        if (scrollPosition > 300) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate skill bars on scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    if (skillsSection && skillBars.length > 0) {
        const skillsSectionTop = skillsSection.offsetTop;
        const windowHeight = window.innerHeight;
        
        if (window.scrollY > skillsSectionTop - windowHeight + 200) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width') + '%';
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            
            // Remove event listener after animation
            window.removeEventListener('scroll', animateSkillBars);
        }
    }
};

window.addEventListener('scroll', animateSkillBars);

// Contact form submission - UPDATED FOR FORMSPREE
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // e.preventDefault() HATA DO - Form ko submit hone do
        
        // Get form values (optional - for tracking)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Log for tracking
        console.log('Form submitted:', { name, email, subject, message });
        
        // Success message (optional)
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
        }, 1000);
        
        // Form automatically reset ho jayega page reload ke baad
    });
}

// Add 3D effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('card-3d');
});

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Animate sections on scroll
    const animateOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial animation
    setTimeout(() => {
        animateOnScroll();
    }, 100);
    
    window.addEventListener('scroll', animateOnScroll);
});

// Handle responsive images
function handleImageResize() {
    const certificateImages = document.querySelectorAll('.project-card img');
    const screenWidth = window.innerWidth;
    
    certificateImages.forEach(img => {
        if (screenWidth < 640) {
            img.style.objectFit = 'cover';
            img.style.height = '160px';
        } else {
            img.style.objectFit = 'cover';
            img.style.height = '192px';
        }
    });
}

// Call on load and resize
window.addEventListener('load', handleImageResize);
window.addEventListener('resize', handleImageResize);

// PDF Download functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('a[href="assets/resume/karan-resume.pdf"]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Optional: Add download tracking or confirmation
            console.log('Resume download initiated');
        });
    }
});