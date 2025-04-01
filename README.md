# Hanhee Lee's Portfolio

A modern, responsive portfolio website showcasing my projects, experience, and skills as a software developer.

## 🚀 Live Demo

Visit the live site at [https://lee-hanhee.github.io](https://lee-hanhee.github.io)

## 🛠️ Technology Stack

- **Frontend Framework**: React with hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom theme configuration
- **Routing**: React Router with hash routing for GitHub Pages compatibility
- **Animations**: Framer Motion for smooth transitions and effects
- **Markdown Rendering**: React Markdown with syntax highlighting
- **Icons**: Lucide React for consistent and accessible iconography
- **Deployment**: GitHub Pages with automated deployment workflow

## ✨ Key Features

- **Responsive Design**: Fully responsive layout that works seamlessly on devices of all sizes
- **Dark/Light Mode**: Theme switching with system preference detection and localStorage persistence
- **Project Filtering**: Filter projects by category (Full Stack, ML, Coursework)
- **Project Showcase**: Detailed project pages with images, tech stack tags, and markdown content
- **Experiences Timeline**: Interactive timeline showcasing professional experience
- **PDF Resume**: Embedded CV with download option
- **Optimized Performance**: Fast loading times and smooth interactions
- **Accessibility**: Designed with accessibility in mind, including proper contrast and keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/lee-hanhee/lee-hanhee.github.io.git
   cd lee-hanhee.github.io
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
/public            # Static assets and markdown files
  /projects        # Markdown files for project details
  /resume.pdf      # Downloadable resume

/src
  /assets          # Images, icons, and other static assets
  /components      # Reusable UI components
    /Layout.jsx    # Main layout component with navigation
    /Navbar.jsx    # Navigation component
    /Footer.jsx    # Footer component
    /ProjectCard.jsx  # Card component for projects
    /MarkdownRenderer.jsx  # Component for rendering markdown
  /data            # JSON data for projects and experiences
  /hooks           # Custom React hooks
    /useTheme.js   # Hook for managing dark/light theme
  /pages           # Page components
    /Home.jsx      # Home page with project listing
    /About.jsx     # About page with personal info
    /CV.jsx        # CV/Resume page
    /Experiences.jsx  # Experience timeline
    /ProjectDetail.jsx  # Detailed project view
```

## 🔧 Customization

### Adding Projects

Add new projects by updating the `src/data/projects.json` file:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "Project description",
  "tags": ["React", "Node.js", "MongoDB"],
  "category": ["Full Stack"],
  "image": "https://example.com/image.jpg",
  "githubUrl": "https://github.com/username/project",
  "liveUrl": "https://example.com",
  "markdownFile": "project.md"
}
```

Then add a corresponding markdown file in `public/projects/`.

### Updating Experience

Modify the experience timeline by updating `src/data/experiences.json`.

## 🚢 Deployment

This site is configured for GitHub Pages deployment. The deployment process is automated through GitHub Actions:

1. Push changes to the main branch
2. GitHub Actions workflow will build the project
3. The built site is automatically deployed to GitHub Pages

Alternatively, you can deploy manually:

```bash
npm run deploy
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## �� Contact

Feel free to reach out if you have any questions or just want to connect:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)
