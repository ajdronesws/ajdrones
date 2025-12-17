# AJ Drones Website

A modern, responsive React website for AJ Drones - Learn • Build • Fly • Innovate

## Features

- 🎨 Modern and attractive UI with gradient backgrounds
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 React Router for smooth navigation
- 🎯 Bootstrap 5 integration
- 📚 Workshop management with JSON data
- 🎓 Educational content pages
- 📧 Contact form
- ✨ Smooth animations and transitions

## Pages

- **Home** (`/` or `/home`) - Landing page with hero section and featured workshops
- **About** (`/about`) - Information about AJ Drones, mission, vision, and philosophy
- **Services** (`/services`) - Overview of services and real-world applications
- **Workshops** (`/workshops`) - Complete list of ongoing and previous workshops
- **Contact** (`/contact`) - Contact form and information

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:

```bash
npm run build
```

The build folder will contain the optimized production files.

## Deployment

### For Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service

### Important for Routing

For proper routing on static hosts, ensure:
- **Netlify**: Create a `public/_redirects` file with: `/* /index.html 200`
- **Vercel**: Create a `vercel.json` with routing configuration
- **GitHub Pages**: Use HashRouter instead of BrowserRouter (or configure server)

The current setup uses BrowserRouter. For static hosting without server configuration, you may need to switch to HashRouter in `src/App.js`.

## Project Structure

```
src/
├── components/
│   ├── Navigation.js
│   ├── Navigation.css
│   ├── Footer.js
│   ├── Footer.css
│   ├── RecentWorkshops.js
│   └── RecentWorkshops.css
├── pages/
│   ├── Home.js
│   ├── Home.css
│   ├── About.js
│   ├── About.css
│   ├── Services.js
│   ├── Services.css
│   ├── Workshops.js
│   ├── Workshops.css
│   ├── Contact.js
│   └── Contact.css
├── data/
│   └── workshopdata.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Customization

### Workshop Data

Edit `src/data/workshopdata.js` to update workshop information. The data structure includes:
- Ongoing workshops
- Previous workshops
- Each workshop has: title, date, location, description, participants, duration, topics, and image URL

### Styling

- Global styles: `src/index.css`
- Component styles: Individual CSS files in each component/page folder
- Bootstrap: Imported globally in `src/App.js`

## Technologies Used

- React 18
- React Router DOM 6
- Bootstrap 5
- CSS3 (with animations and gradients)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 AJ Drones. All rights reserved.

