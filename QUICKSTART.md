# Quick Start Guide

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to that URL

## Available Routes

- `/` or `/home` - Landing page
- `/about` - About page
- `/services` - Services page
- `/workshops` - Workshops page
- `/contact` - Contact page

All routes are properly configured and will not show 404 errors.

## Customizing Content

### Update Workshop Data

Edit `src/data/workshopdata.js`:

```javascript
export const workshopData = {
  ongoing: [
    {
      id: 1,
      title: "Your Workshop Title",
      date: "2024-01-15",
      location: "Location",
      status: "ongoing",
      description: "Description...",
      participants: 45,
      duration: "3 hours",
      image: "image-url",
      topics: ["Topic 1", "Topic 2"]
    }
  ],
  previous: [...]
};
```

### Update Contact Information

Edit `src/components/Footer.js` and `src/pages/Contact.js` to update:
- Email addresses
- Phone numbers
- Location information

### Update Colors/Styling

- Global styles: `src/index.css`
- Component styles: Individual CSS files
- Main theme colors are in gradient backgrounds throughout

## Building for Production

```bash
npm run build
```

The optimized build will be in the `build` folder.

## Need Help?

- Check `README.md` for detailed documentation
- Check `DEPLOYMENT.md` for deployment instructions
- Review component files for code structure

