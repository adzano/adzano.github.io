/**
 * Main Application Module
 * Handles dynamic content rendering from portfolioConfig
 */

/**
 * Render experience cards from configuration
 */
function renderExperience() {
  const container = document.getElementById('experience-container');
  
  if (!container) {
    return;
  }

  // Handle empty or missing data
  if (!portfolioConfig.experience || portfolioConfig.experience.length === 0) {
    container.innerHTML = '<p class="empty-message">No experience entries available.</p>';
    return;
  }

  const html = portfolioConfig.experience.map(exp => `
    <div class="card experience-card">
      <h3 class="card-title">${exp.title}</h3>
      <p class="card-company">${exp.company}</p>
      <p class="card-period">${exp.period}</p>
      <p class="card-description">${exp.description}</p>
      ${exp.link ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="card-link">View Details</a>` : ''}
    </div>
  `).join('');

  container.innerHTML = html;
}

/**
 * Render certification cards from configuration
 */
function renderCertifications() {
  const container = document.getElementById('certifications-container');
  
  if (!container) {
    return;
  }

  // Handle empty or missing data
  if (!portfolioConfig.certifications || portfolioConfig.certifications.length === 0) {
    container.innerHTML = '<p class="empty-message">No certifications available.</p>';
    return;
  }

  const html = portfolioConfig.certifications.map(cert => `
    <div class="card cert-card">
      <h3 class="card-title">${cert.title}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
      <p class="cert-date">${cert.date}</p>
      ${cert.credentialId ? `<p class="cert-id">ID: ${cert.credentialId}</p>` : ''}
      ${cert.credentialUrl ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="card-link cert-link">View Credential</a>` : ''}
    </div>
  `).join('');

  container.innerHTML = html;
}

/**
 * Render project cards with technology tags from configuration
 */
function renderProjects() {
  const container = document.getElementById('projects-container');
  
  if (!container) {
    return;
  }

  // Handle empty or missing data
  if (!portfolioConfig.projects || portfolioConfig.projects.length === 0) {
    container.innerHTML = '<p class="empty-message">No projects available.</p>';
    return;
  }

  const html = portfolioConfig.projects.map(project => {
    const techTags = project.technologies.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');

    const links = [];
    if (project.githubUrl) {
      links.push(`<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-link"><i class="fab fa-github"></i> GitHub</a>`);
    }
    if (project.liveUrl) {
      links.push(`<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>`);
    }

    return `
      <div class="card project-card">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.description}</p>
        <div class="tech-tags">
          ${techTags}
        </div>
        ${links.length > 0 ? `<div class="project-links">${links.join('')}</div>` : ''}
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/**
 * Render social media links from configuration
 */
function renderSocial() {
  const heroSocialContainer = document.getElementById('hero-social');
  const footerSocialContainer = document.getElementById('footer-social');
  
  if (!portfolioConfig.personal || !portfolioConfig.personal.social) {
    return;
  }

  const social = portfolioConfig.personal.social;
  const socialLinks = [];

  // Build social links array
  if (social.linkedin) {
    socialLinks.push(`<a href="${social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`);
  }
  if (social.github) {
    socialLinks.push(`<a href="${social.github}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub"><i class="fab fa-github"></i></a>`);
  }
  if (social.instagram) {
    socialLinks.push(`<a href="${social.instagram}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>`);
  }
  if (social.email) {
    socialLinks.push(`<a href="${social.email}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Email"><i class="fas fa-envelope"></i></a>`);
  }

  const html = socialLinks.join('');

  // Render to both hero and footer sections
  if (heroSocialContainer) {
    heroSocialContainer.innerHTML = html;
  }
  if (footerSocialContainer) {
    footerSocialContainer.innerHTML = html;
  }
}

/**
 * Render personal information (bio and tagline)
 */
function renderPersonalInfo() {
  // Render tagline
  const taglineElement = document.getElementById('tagline');
  if (taglineElement && portfolioConfig.personal && portfolioConfig.personal.tagline) {
    taglineElement.textContent = portfolioConfig.personal.tagline;
  }

  // Render bio
  const bioElement = document.getElementById('bio-text');
  if (bioElement && portfolioConfig.personal && portfolioConfig.personal.bio) {
    bioElement.textContent = portfolioConfig.personal.bio;
  }

  // Set current year in footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Initialize typing effect using Typed.js
 */
function initTypingEffect() {
  const typingElement = document.querySelector('.typing-text');
  
  if (!typingElement) {
    return;
  }

  if (!portfolioConfig.personal || !portfolioConfig.personal.roles || portfolioConfig.personal.roles.length === 0) {
    typingElement.textContent = 'a Cloud Engineer';
    return;
  }

  // Initialize Typed.js with configuration
  new Typed('.typing-text', {
    strings: portfolioConfig.personal.roles,
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
}

/**
 * Main initialization function
 * Calls all render functions to populate the page with data
 */
function init() {
  try {
    // Render all sections
    renderPersonalInfo();
    renderSocial();
    renderExperience();
    renderCertifications();
    renderProjects();
    initTypingEffect();
  } catch (error) {
    // Silently handle initialization errors
  }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
