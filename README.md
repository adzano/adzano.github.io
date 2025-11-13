# Cloud Engineer Portfolio

A modern, single-page portfolio website showcasing professional experience, certifications, and projects. Built with vanilla JavaScript, HTML5, and CSS3 for easy maintenance and GitHub Pages deployment.

## Features

- **Single-Page Application**: Smooth scrolling navigation between sections
- **Dynamic Content**: All content managed through a centralized configuration file
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Typing Animation**: Dynamic role display using Typed.js
- **Easy Updates**: No HTML editing required - just update the config file
- **GitHub Pages Ready**: Static files with no build process required

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles with CSS variables
│   └── responsive.css     # Responsive design media queries
├── js/
│   ├── config.js          # Content configuration (edit this!)
│   ├── app.js             # Dynamic content rendering
│   └── navigation.js      # Smooth scroll and navigation
├── img/
│   └── myprofile.jpeg     # Profile image
└── README.md              # This file
```

## Quick Start

1. Clone the repository
2. Update `js/config.js` with your information
3. Replace `img/myprofile.jpeg` with your profile photo
4. Open `index.html` in a browser to preview
5. Deploy to GitHub Pages (see deployment section)

## Updating Content

All portfolio content is managed in `js/config.js`. This centralized approach means you never need to edit HTML files directly.

### Updating Personal Information

Edit the `personal` object in `config.js`:

```javascript
personal: {
  name: "Your Name",
  roles: [
    "Your Name.",
    "a Cloud Engineer.",
    "a Software Developer.",
    // Add more roles for the typing effect
  ],
  tagline: "Your professional tagline",
  bio: "Your professional bio...",
  profileImage: "img/myprofile.jpeg",
  social: {
    linkedin: "https://www.linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    instagram: "https://instagram.com/yourhandle",
    email: "mailto:your.email@example.com"
  }
}
```

**Tips:**
- The first role in the array should be your name followed by a period
- Keep roles concise (3-5 words each)
- Update the bio to reflect your current experience and focus

### Adding New Certifications

Add a new certification object to the `certifications` array in `config.js`:

```javascript
certifications: [
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://www.credly.com/badges/your-badge-id",
    credentialId: "ABC123XYZ" // Optional
  },
  // Add your new certification here
  {
    title: "Your New Certification",
    issuer: "Issuing Organization",
    date: "2024",
    credentialUrl: "https://credential-verification-url.com", // Optional
    credentialId: "CREDENTIAL-ID" // Optional
  }
]
```

**Required Fields:**
- `title`: Full certification name
- `issuer`: Organization that issued the certification
- `date`: Year obtained (or "Month Year" format)

**Optional Fields:**
- `credentialUrl`: Link to verify the credential (if available)
- `credentialId`: Credential ID number (if applicable)

**Notes:**
- Certifications are displayed in the order they appear in the array
- If no `credentialUrl` is provided, the "View Credential" button won't appear
- Keep the most recent or important certifications at the top

### Adding New Projects

Add a new project object to the `projects` array in `config.js`:

```javascript
projects: [
  {
    title: "Your Project Name",
    description: "Brief description of what the project does and its impact...",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    githubUrl: "https://github.com/yourusername/project-repo", // Optional
    liveUrl: "https://your-project-demo.com" // Optional
  },
  // Add more projects...
]
```

**Required Fields:**
- `title`: Project name
- `description`: 2-3 sentence description of the project
- `technologies`: Array of technologies used (displayed as tags)

**Optional Fields:**
- `githubUrl`: Link to the GitHub repository
- `liveUrl`: Link to live demo or deployed application

**Tips:**
- List 3-6 key technologies per project
- Keep descriptions concise but informative
- Highlight the impact or results when possible
- Projects appear in the order listed in the array

### Adding New Experience

Add a new experience entry to the `experience` array in `config.js`:

```javascript
experience: [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Jan 2023 - Present",
    description: "Description of your role, responsibilities, and key achievements. Use bullet points or concise paragraphs.",
    link: "https://company-website.com" // Optional
  },
  // Add more experience entries...
]
```

**Required Fields:**
- `title`: Your job title or role
- `company`: Company or organization name
- `period`: Date range (e.g., "2021 - Present" or "Jan 2021 - Dec 2022")
- `description`: Your responsibilities and achievements

**Optional Fields:**
- `link`: URL to company website or project (if applicable)

**Tips:**
- List experiences in reverse chronological order (most recent first)
- Focus on achievements and impact, not just duties
- Use specific metrics when possible (e.g., "Reduced costs by 30%")
- Keep descriptions to 2-4 sentences

## Updating Profile Image

1. Prepare your image:
   - **Recommended size**: 300x300 pixels or larger (square aspect ratio)
   - **Format**: JPEG or PNG
   - **File size**: Keep under 500KB for fast loading
   - **Style**: Professional headshot with good lighting

2. Replace the image file:
   - Save your image as `img/myprofile.jpeg`
   - Or use a different filename and update `config.js`:
     ```javascript
     profileImage: "img/your-new-image.jpg"
     ```

3. Optimize the image (optional but recommended):
   - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Compress without losing visible quality
   - Smaller files = faster page loads

## GitHub Pages Deployment

### Initial Setup

1. **Create a GitHub repository**:
   - Repository name: `yourusername.github.io` (for user site)
   - Or any name for a project site
   - Make it public

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"

4. **Access your site**:
   - User site: `https://yourusername.github.io`
   - Project site: `https://yourusername.github.io/repository-name`
   - Wait 1-2 minutes for initial deployment

### Updating Your Portfolio

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Pages will automatically rebuild and deploy your site within 1-2 minutes.

### Custom Domain (Optional)

1. Purchase a domain from a registrar (e.g., Namecheap, Google Domains)
2. Add a `CNAME` file to your repository root with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS records at your registrar:
   - Add an A record pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record pointing to `yourusername.github.io`
4. In GitHub repository settings > Pages, enter your custom domain
5. Enable "Enforce HTTPS" after DNS propagates (24-48 hours)

## Customization

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #2ecc72;      /* Main accent color */
  --primary-dark: #0f8643;       /* Darker shade for hover */
  --bg-dark: #0a0a0a;            /* Main background */
  --bg-section: #1a1a1a;         /* Section background */
  --text-primary: #ffffff;       /* Primary text */
  --text-secondary: #d1cece;     /* Secondary text */
}
```

### Changing Fonts

Update font imports in `index.html` and CSS variables in `css/style.css`:

```css
--font-heading: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;
```

### Adjusting Typing Speed

Modify the Typed.js configuration in `js/app.js`:

```javascript
typeSpeed: 70,    // Typing speed in milliseconds
backSpeed: 40,    // Backspace speed in milliseconds
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Issue**: Changes not appearing on GitHub Pages
- **Solution**: Wait 1-2 minutes for deployment, clear browser cache, or try incognito mode

**Issue**: Profile image not loading
- **Solution**: Check file path in `config.js` matches actual file location and name

**Issue**: Typing effect not working
- **Solution**: Ensure Typed.js CDN link is present in `index.html` and roles array is not empty

**Issue**: Smooth scrolling not working
- **Solution**: Check that section IDs in HTML match navigation href values

**Issue**: Mobile menu not opening
- **Solution**: Verify `navigation.js` is loaded and hamburger button has correct ID

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, reach out via the social links on the portfolio site.
