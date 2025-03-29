# Hanhee Lee Portfolio

This is a developer portfolio website built with React, Vite, and Tailwind CSS. It showcases my projects, skills, and experiences in a clean and modern interface.

## Features

- Responsive design using Tailwind CSS
- Dark/light mode toggle
- Project filtering by category
- Project details with Markdown rendering
- Clean and intuitive navigation

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Markdown
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v16+)
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
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
/src
  /assets        # Static assets like images
  /components    # Reusable UI components
  /data          # Project metadata
  /hooks         # Custom React hooks
  /pages         # Page components
  /projects      # Markdown files for project details
  App.jsx        # Main application component
  main.jsx       # Application entry point
```

## Customization Guide

### Adding a New Project

1. Create a new Markdown file in the `/src/projects` directory
2. Add the project metadata to `/src/data/projects.json`
3. Add any project images to `/src/assets`

### Modifying Site Information

- Update personal information in each page component
- Customize the styling by modifying Tailwind classes or updating `/src/index.css`
- Change site colors by updating the theme colors in `tailwind.config.js`

## Deployment

The site is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch of your repository.

## Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/en/main)

## License

This project is open source and available under the [MIT License](LICENSE). 