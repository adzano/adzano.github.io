/**
 * Navigation Module
 * Handles smooth scrolling, scroll spy, and mobile menu functionality
 */

(function() {
  'use strict';

  // Configuration
  const HEADER_HEIGHT = 80; // Offset for fixed header
  const SCROLL_THRESHOLD = 100; // Threshold for scroll spy activation
  
  // DOM Elements
  let hamburger;
  let navMenu;
  let navLinks;
  let backdrop;

  /**
   * Initialize navigation functionality
   */
  function init() {
    // Get DOM elements
    hamburger = document.getElementById('hamburger');
    navMenu = document.querySelector('.nav-links');
    navLinks = document.querySelectorAll('.nav-link');
    
    // Create backdrop for mobile menu
    createBackdrop();
    
    // Set up event listeners
    setupSmoothScroll();
    setupScrollSpy();
    setupMobileMenu();
  }

  /**
   * Create backdrop element for mobile menu
   */
  function createBackdrop() {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    backdrop.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
      z-index: 999;
    `;
    document.body.appendChild(backdrop);
    
    // Close menu when backdrop is clicked
    backdrop.addEventListener('click', closeMobileMenu);
  }

  /**
   * Set up smooth scrolling for navigation links
   */
  function setupSmoothScroll() {
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // Calculate scroll position with offset
          const targetPosition = targetSection.offsetTop - HEADER_HEIGHT;
          
          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (window.innerWidth <= 768) {
            closeMobileMenu();
          }
        }
      });
    });
  }

  /**
   * Set up scroll spy to highlight active section
   */
  function setupScrollSpy() {
    window.addEventListener('scroll', throttle(updateActiveSection, 100));
    
    // Initial call to set active section on page load
    updateActiveSection();
  }

  /**
   * Update active navigation link based on scroll position
   */
  function updateActiveSection() {
    const sections = document.querySelectorAll('section, footer');
    const scrollPosition = window.scrollY + HEADER_HEIGHT + SCROLL_THRESHOLD;
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });
    
    // Update active class on navigation links
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Set up mobile hamburger menu functionality
   */
  function setupMobileMenu() {
    if (hamburger) {
      hamburger.addEventListener('click', toggleMobileMenu);
    }
  }

  /**
   * Toggle mobile menu open/closed
   */
  function toggleMobileMenu() {
    const isOpen = navMenu.classList.contains('open');
    
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  /**
   * Open mobile menu
   */
  function openMobileMenu() {
    navMenu.classList.add('open');
    hamburger.classList.add('active');
    backdrop.style.opacity = '1';
    backdrop.style.visibility = 'visible';
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    backdrop.style.opacity = '0';
    backdrop.style.visibility = 'hidden';
    
    // Restore body scroll
    document.body.style.overflow = '';
  }

  /**
   * Throttle function to limit execution rate
   * @param {Function} func - Function to throttle
   * @param {number} delay - Delay in milliseconds
   * @returns {Function} Throttled function
   */
  function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }

  /**
   * Handle window resize to close mobile menu on desktop
   */
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  /**
   * Scroll to Top Button Functionality
   */
  function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (!scrollToTopBtn) {
      return;
    }

    // Show/hide button based on scroll position
    window.addEventListener('scroll', throttle(function() {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }, 100));

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      init();
      initScrollToTop();
    });
  } else {
    init();
    initScrollToTop();
  }

})();
