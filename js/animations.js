/**
 * Advanced Animations Module
 * Handles scroll animations, parallax effects, and micro-interactions
 */

(function() {
  'use strict';

  // Configuration
  const ANIMATION_CONFIG = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  /**
   * Initialize all animations
   */
  function init() {
    initScrollAnimations();
    initParallaxEffect();
    initCardAnimations();
    initLoadingAnimation();
    initCounterAnimations();
  }

  /**
   * Scroll-triggered animations using Intersection Observer
   */
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.section, .card, .hero-content, .profile-image-container'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered delay for multiple elements
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
          
          observer.unobserve(entry.target);
        }
      });
    }, ANIMATION_CONFIG);

    animatedElements.forEach(el => {
      el.classList.add('animate-fade-in');
      observer.observe(el);
    });
  }

  /**
   * Parallax effect on hero section
   */
  function initParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    const profileImage = document.querySelector('.profile-image');
    
    if (!heroSection || !profileImage) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const heroHeight = heroSection.offsetHeight;
          
          // Only apply parallax in hero section
          if (scrolled < heroHeight) {
            const parallaxSpeed = 0.5;
            const yPos = scrolled * parallaxSpeed;
            
            // Move profile image slower than scroll
            if (profileImage) {
              profileImage.style.transform = `translateY(${yPos * 0.3}px) scale(${1 - scrolled / heroHeight * 0.1})`;
            }
            
            // Fade out hero content as you scroll
            const opacity = 1 - (scrolled / heroHeight) * 1.5;
            heroSection.style.opacity = Math.max(opacity, 0.3);
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    });
  }

  /**
   * Enhanced card animations with 3D transforms
   */
  function initCardAnimations() {
    const cards = document.querySelectorAll('.card, .cert-card, .project-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
      
      // 3D tilt effect on mouse move
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `
          translateY(-12px) 
          scale(1.02)
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  }

  /**
   * Loading animation on page load
   */
  function initLoadingAnimation() {
    // Create loading overlay
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="loader-content">
        <div class="loader-spinner"></div>
        <p class="loader-text">Loading Portfolio...</p>
      </div>
    `;
    document.body.appendChild(loader);
    
    // Remove loader when page is fully loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.remove();
        }, 500);
      }, 800);
    });
  }

  /**
   * Animated counters for stats
   */
  function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute('data-count'));
          const duration = 2000;
          const startTime = performance.now();
          
          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * endValue);
            
            target.textContent = currentValue;
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              target.textContent = endValue;
            }
          }
          
          requestAnimationFrame(updateCounter);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  }

  /**
   * Add smooth reveal animation to sections
   */
  function addSectionReveal() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.1}s`;
    });
  }

  /**
   * Typing cursor blink enhancement
   */
  function enhanceTypingCursor() {
    const typedCursor = document.querySelector('.typed-cursor');
    if (typedCursor) {
      typedCursor.style.animation = 'blink 0.7s infinite';
    }
  }

  /**
   * Add ripple effect to buttons
   */
  function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .card-link, .project-link');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  /**
   * Smooth scroll progress indicator
   */
  function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  /**
   * Add floating animation to social icons
   */
  function initFloatingIcons() {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach((link, index) => {
      link.style.animationDelay = `${index * 0.1}s`;
      link.classList.add('float-animation');
    });
  }

  /**
   * Initialize all animations when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init();
      addSectionReveal();
      enhanceTypingCursor();
      initRippleEffect();
      initScrollProgress();
      initFloatingIcons();
    });
  } else {
    init();
    addSectionReveal();
    enhanceTypingCursor();
    initRippleEffect();
    initScrollProgress();
    initFloatingIcons();
  }

})();
