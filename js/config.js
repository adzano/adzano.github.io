/**
 * Portfolio Configuration
 * Centralized content management for the portfolio website
 * Update this file to modify portfolio content without touching HTML
 */

const portfolioConfig = {
  personal: {
    name: "Adzano Elang Saputro",
    roles: [
      "a Cloud Engineer",
      "an IT Infrastructure Specialist",
      "a Backend Developer"
    ],
    tagline: "Cloud Engineer with 2+ years of experience",
    bio: "Cloud Engineer with 2+ years of experience specializing in backend development and cloud infrastructure. Passionate about building scalable solutions using Node.js, Python, and Google Cloud Platform. Experienced in API development, system design, and deploying cloud-native applications. As a people person who enjoys building relationships, I thrive in team-based environments while maintaining strong individual time management skills. Always eager to explore and learn new technologies.",
    profileImage: "img/myprofile.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/adzanoelang",
      github: "https://github.com/adzano",
      instagram: "https://instagram.com/adzanoelang",
      email: "https://s.id/adzano"
    }
  },

  experience: [
    {
      title: "CC Team Member",
      company: "C23-PS298 Bangkit Capstone Team",
      period: "May 2023 - June 2023",
      description: "Created system design, functional API and successfully deployed it into GCP solutions for an android app named 'SaBo' that can detect presence of unwanted objects to aid in Indonesia's border security. Our project successfully gained Bangkit's attention and was awarded as the top 68 team projects among all 787 teams.",
      link: "https://drive.google.com/file/d/16She4nMNoShPX5OmdB7ao63sP4HrNiWX/view?usp=sharing"
    },
    {
      title: "Cloud Computing Cohort",
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      period: "February 2023 - July 2023",
      description: "Learned how to build webs and APIs, deploying solutions into Google Cloud Platform with various use cases. Completed all 28 mandatory courses and quests ahead of schedule with an average score of 89.23/A. Actively participated and applied knowledge into the final Capstone Project with the presence of source control and project managed work environment. Acquired a number of soft skills such as teamwork, critical thinking, problem solving, time management, adaptability and resilience.",
      link: "https://drive.google.com/file/d/1o-HOhNvy4xRLd22RR8mmjySpQ8O2_Ehk/view?usp=sharing"
    },
    {
      title: "Backend Engineer Intern",
      company: "PUSTIPANDA UIN Jakarta",
      period: "February 2023 - May 2023",
      description: "Created an interactive API Documentation for Academic Information System from the existing API for UIN Jakarta Lecturer using Swagger with OpenAPI 3.0 Specification and hosted it in UIN Jakarta's on-premise server.",
      link: null
    }
  ],

  certifications: [
    {
      title: "Google Cloud Skills Boost",
      issuer: "Google Cloud",
      date: "2023",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/4381fae9-b871-4de5-a2cd-82f3a82d2727",
      credentialId: null
    },
    {
      title: "System Administration and IT Infrastructure Services",
      issuer: "Coursera",
      date: "March 2023",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/RJX8ZH5S87RT",
      credentialId: "RJX8ZH5S87RT"
    },
    {
      title: "Menjadi Google Cloud Engineer",
      issuer: "Dicoding",
      date: "March 2023",
      credentialUrl: "https://www.dicoding.com/certificates/N9ZO66E7DXG5",
      credentialId: "N9ZO66E7DXG5"
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "March 2023",
      credentialUrl: "https://www.dicoding.com/certificates/NVP79073OZR0",
      credentialId: "NVP79073OZR0"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "February 2023",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/2XBZ49FECGEW",
      credentialId: "2XBZ49FECGEW"
    },
    {
      title: "Dasar-Dasar HTML, CSS, JavaScript, PHP, MySQL",
      issuer: "Kampus Biner",
      date: "October 2020",
      credentialUrl: null,
      credentialId: null
    },
    {
      title: "Microsoft Technology Associate: Windows Server Administration Fundamentals",
      issuer: "Microsoft",
      date: "October 2020",
      credentialUrl: null,
      credentialId: null
    }
  ],

  projects: [
    {
      title: "SaBo - Smart Border Security App",
      description: "National security and defense are very important for the country and its people, especially since we know that Indonesia is a big country. Therefore, good facilities are needed to guard the border areas in Indonesia because there are still many violations in the border areas, such as migration and illegal smuggling of goods. That's where SaBo came to help!",
      technologies: ["Node.js", "Google Cloud Platform", "TensorFlow", "Android", "Machine Learning"],
      githubUrl: "https://github.com/C23-PS298",
      liveUrl: null
    },
    {
      title: "Deepfake Classifications Using Triplet Loss + Binary Classifier",
      description: "This project acts as my final project for my thesis in my university. This project is currently still in development and not yet finished. Basically this Python project aims to classify whether a person in a video given is real or fake.",
      technologies: ["Python", "TensorFlow", "Machine Learning", "Computer Vision", "Deep Learning"],
      githubUrl: "https://github.com/adzano/deepfake-detection",
      liveUrl: null
    }
  ]
};
