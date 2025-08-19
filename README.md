# Anouka Farms - Agricultural Website

A modern, responsive website for Anouka Farms, an agricultural business located in Borno State, Nigeria. Our mission is to contribute to Nigeria's and the world's food basket through sustainable farming practices.

## About Anouka Farms

Anouka Farms specializes in cultivating various crops suited to the climate of Borno State, including:

- **Millet** - Drought-resistant grain crop, rich in nutrients
- **Sorghum** - Versatile cereal grain for food and animal feed
- **Cowpea (Black-eyed Peas)** - Protein-rich legume that improves soil fertility
- **Groundnuts (Peanuts)** - Oil-rich crop valuable for food security
- **Sesame** - High-value oil seed crop with excellent market demand
- **Maize** - Staple grain crop providing food security

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Programming language

## Features

- 📱 **Responsive Design** - Works perfectly on all devices
- 🌾 **Crop Showcase** - Detailed information about our crops
- 📧 **Contact Form** - Easy way for visitors to get in touch
- 🎨 **Modern UI** - Clean, professional design
- ♿ **Accessible** - Built with accessibility in mind

## Prerequisites

⚠️ **Important**: This project requires **Node.js 20.19+** or **Node.js 22.12+**

Current versions being used: Node.js 18.12.1 (needs upgrade)

To check your Node.js version:
```bash
node --version
```

To upgrade Node.js:
- Visit [nodejs.org](https://nodejs.org) to download the latest LTS version
- Or use a version manager like nvm: `nvm install --lts && nvm use --lts`

## Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About our farm
│   ├── Crops.jsx        # Crops showcase
│   ├── Contact.jsx      # Contact form
│   ├── Footer.jsx       # Footer section
│   └── *.css            # Component styles
├── App.jsx              # Main App component
├── App.css              # Global styles
└── main.jsx             # Entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

To customize this website for your farm:

1. **Update farm information** in the components
2. **Replace placeholder images** with actual farm photos
3. **Modify contact information** in Contact.jsx and Footer.jsx
4. **Adjust colors** in the CSS files to match your brand
5. **Add/remove crops** in the Crops.jsx component

## Deployment

This site can be deployed to various platforms:

- **Vercel** - `npm i -g vercel && vercel`
- **Netlify** - Drag and drop the `dist` folder after building
- **GitHub Pages** - Use GitHub Actions for automatic deployment
- **Your hosting provider** - Upload the `dist` folder contents

## Contributing to Nigeria's Food Basket

Anouka Farms is committed to:

- 🌱 **Sustainable Agriculture** - Environmentally responsible farming
- 🤝 **Community Support** - Supporting local farmers and development
- 🏆 **Quality Focus** - Premium crops meeting international standards
- 🌍 **Global Impact** - Contributing to food security in Nigeria and beyond

## Contact

- **Location**: Borno State, Nigeria
- **Email**: info@anoukafarms.ng
- **Phone**: +234 [Your Phone Number]

---

*Building Nigeria's agricultural future, one harvest at a time.*
