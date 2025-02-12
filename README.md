# Sitecore XM Cloud Dashboard

A modern, responsive dashboard application built to provide a comprehensive overview of Sitecore XM Cloud environments. This dashboard offers real-time insights into publishing activities, website collections, and media library assets.

## Features

- **Publishing Overview**: Track the latest publishing jobs, including statistics on published, skipped, and failed items
- **Website Collections**: Monitor multiple website collections and their associated websites
- **Media Library**: Get instant visibility into your media assets across different categories
- **Responsive Design**: Fully responsive interface that works seamlessly across all devices
- **Modern UI**: Built with Chakra UI and Material Design principles for a clean, professional look

## Tech Stack

- React 18
- TypeScript
- Chakra UI v2
- Material UI (MUI)
- Vite
- Tailwind CSS
- Lucide React Icons

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd sitecore-xm-cloud-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check for code quality issues

## Project Structure

```
src/
├── components/         # React components
│   ├── MediaLibrary.tsx
│   ├── PublishInfo.tsx
│   └── WebsiteCollections.tsx
├── App.tsx            # Main application component
├── main.tsx          # Application entry point
├── theme.ts          # Chakra UI theme configuration
└── vite-env.d.ts     # TypeScript declarations
```

## Deployment

The application is configured for deployment on Netlify. The production build can be created using:

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.