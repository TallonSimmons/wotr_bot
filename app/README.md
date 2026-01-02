# War of the Ring Bot - Modern Edition

Modern static web application for the War of the Ring Bot, built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, non-scrolling interface that displays only the current story step
- **Screen-based navigation**: Choices appear as clear buttons in a stable area
- **History panel**: Collapsible panel to review past steps and choices
- **Save/Load**: Browser-based save system using localStorage
- **Warriors of Middle Earth**: Support for the expansion
- **Responsive design**: Works on desktop and mobile devices
- **Dark theme**: Uses elegant fonts from the original version

## Technology Stack

- **Vite**: Fast build tool and dev server
- **React 19**: Modern UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **inkjs**: Ink story engine for JavaScript

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
app/
├── public/          # Static assets (fonts, images)
├── src/
│   ├── components/  # React components
│   ├── data/        # Story content
│   ├── hooks/       # Custom React hooks
│   ├── utils/       # Utility functions
│   └── App.tsx      # Main app component
└── package.json
```

## Legacy Version

The original version is preserved in the `htdocs/` directory and remains fully functional.
