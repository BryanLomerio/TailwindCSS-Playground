
# Tailwind CSS Playground

A modern UI toolkit that combines a **split-screen code editor with live preview**, a **component library**, and a **Tailwind color palette visualization** for seamless front-end development.

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **UI Framework**: Tailwind CSS 3
- **Code Editor**: Monaco Editor
- **UI Components**:
  - Radix UI
  - Shadcn/ui
  - Headless UI
- **Animations**: Framer Motion
- **Other Tools**:
  - Shepherd.js (for tutorials)
  - Lucide React (for icons)
  - Next-themes (dark/light mode)

## Features

- **Split-Screen Layout** – Code on one side, live preview on the other
- **Component Library** – Access reusable UI elements for faster prototyping
- **Tailwind Colors Visualization** – Explore Tailwind's color palette easily
- **Responsive Design** – Works on all screen sizes and devices
- **Code Copying** – Instantly copy generated code with one click
- **Interactive Tutorial** – Built-in guide for new users
- **Dark/Light Mode** – Theme switching support
- **Local Storage** – Save your code locally
- **Download Code** – Export your HTML files

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. **Clone the Repository**
```bash
git clone https://github.com/BryanLomerio/TailwindCSS-Playground.git
cd TailwindCSS-Playground
```

2. **Install Dependencies**
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

3. **Start Development Server**
```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

4. **Access the Application**
Open your browser and visit: `http://localhost:8080`

## Development

### Project Structure
```
src/
├── components/         # React components
├── pages/             # Page components
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
└── main.tsx         # Application entry point
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Styling

The project uses:
- Tailwind CSS for styling
- CSS-in-JS with styled-components
- Custom animations with Framer Motion
- Custom Tailwind configuration in `tailwind.config.ts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If you'd like to support this project, you can:
- Star the repository
- Report bugs
- Submit PRs
- Share with others

---

Created with ❤️ by Bryan Lomerio

