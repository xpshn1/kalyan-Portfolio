# Kalyan's Portfolio Website

A professional portfolio website built with Next.js, React, and TailwindCSS, showcasing my skills, projects, and achievements as a Data Analyst and Business Analytics Professional.

## Overview

This portfolio website features:
- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode based on system preferences
- Detailed sections for About, Skills, Projects, Education, and Contact
- Integration options for social media profiles and project repositories
- Code samples with syntax highlighting

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing the Portfolio

### 1. Personal Information

Update your personal information in `src/app/page.tsx`:
- Edit the name, title, and tagline in the Hero section
- Update your About Me section with your professional background
- Customize your Skills, Education, and Projects sections

### 2. Adding Your Profile Image

1. Add your profile image to `public/images/` directory
2. Edit the Hero section in `src/app/page.tsx`:
   - Uncomment the Image component for profile picture
   - Update the src to point to your image file
   - Comment out the placeholder div with the letter "K"

### 3. Adding Project Images and PDFs

1. Add project images to `public/images/projects/` directory
2. Add project PDFs to `public/pdfs/` directory
3. For each project in `src/app/page.tsx`:
   - Uncomment the Image component
   - Update the src to point to your project image
   - Comment out the placeholder div

### 4. Social Media and Project Links

1. Update the contact section with your actual social media links:
   - Email address
   - GitHub username
   - LinkedIn profile
   - Tableau Public profile
   - Any other platforms you use

2. Update project links with your actual GitHub repositories and demo URLs.

### 5. Code Samples

Customize the code samples in the Projects section with actual code from your projects.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
