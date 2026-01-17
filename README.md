# Flatcolor PDF

A modern, responsive web application for converting images to flat color PDFs with customizable layouts and color palettes. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Customizable Color Palette** - Choose from presets or create your own two-color scheme
- 📄 **Multiple Page Layouts** - Single, 1×2, 2×1, 2×2, and 3×3 grid layouts
- 🖼️ **Image Upload & Preview** - Drag & drop or click to upload JPG, PNG, WEBP images
- 📋 **Flat Color PDF Generation** - Clean, print-ready PDFs with no gradients
- 📝 **Header & Footer Editor** - Add custom text to all pages
- 🎯 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast & Modern** - Built with Vite for lightning-fast performance
- 🎨 **Professional UI** - Built with shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone https://github.com/dev-adnansultan/flatcolor-pdf.git

# Navigate to the project directory
cd flatcolor-pdf

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will start at `http://localhost:5173` with hot module reloading enabled.

## Building for Production

```sh
# Build the application
npm run build

# Preview the production build locally
npm run preview
```

The production-ready files will be in the `dist` directory.

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Deploy to GitHub Pages

```sh
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Technologies Used

- **Vite** - Lightning-fast build tool
- **TypeScript** - Type safety and better DX
- **React 18** - UI library
- **shadcn/ui** - High-quality UI components
- **Tailwind CSS** - Utility-first CSS framework
- **jsPDF** - PDF generation
- **React Dropzone** - File upload handling
- **Lucide React** - Beautiful icons

## Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # shadcn-ui components
│   ├── ColorPicker.tsx
│   ├── ColorPresets.tsx
│   ├── HeaderFooterEditor.tsx
│   ├── ImagePreview.tsx
│   ├── ImageUploader.tsx
│   ├── LayoutSelector.tsx
│   ├── MarginControls.tsx
│   ├── PageSizeSelector.tsx
│   └── PDFPreview.tsx
├── lib/              # Utility functions
│   ├── pdfGenerator.ts
│   └── utils.ts
├── pages/            # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/            # Custom React hooks
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- ✅ Code splitting with React lazy loading
- ✅ Optimized images and assets
- ✅ Minified CSS and JavaScript
- ✅ Tree-shaking for smaller bundle size
- ✅ Fast refresh during development

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/dev-adnansultan/flatcolor-pdf/issues) on GitHub.

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
