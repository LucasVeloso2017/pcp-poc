# PCP Marketplace Frontend

## Introduction

PCP Marketplace is a comprehensive web marketplace platform that bridges the gap between suppliers and buyers in a unified ecosystem. This frontend application provides an intuitive interface for both supplier and buyer perspectives, enabling seamless product discovery, catalog management, and procurement processes.

The platform focuses on creating an efficient marketplace experience where suppliers can showcase their products with detailed specifications and characteristics, while buyers can easily search, filter, and select products that meet their specific requirements.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd PCP.Marketplace.FrontEnd
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ActionCard/      # Action selection cards
│   └── CardProduct/     # Product display cards
├── features/            # Feature-specific modules
│   └── Supplier/        # Supplier-related features
│       └── Catalog/     # Product catalog functionality
├── hooks/               # Custom React hooks
├── services/            # API services
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── styles/              # Global styles and themes
```

## Technologies

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with modern hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Turbopack** - Ultra-fast bundler for development

### UI Components
- **Lucide React** - Beautiful icon library
- **Next/Image** - Optimized image component

### Key Features
- **SSO Integration Ready** - Prepared for Single Sign-On authentication
- **Responsive Design** - Mobile-first approach
- **Component Architecture** - Modular and reusable components
- **Type Safety** - Full TypeScript implementation
- **Performance Optimized** - Next.js optimizations and best practices

### Design System
- **Figma Specifications** - Pixel-perfect implementation following design specs
- **Custom Typography** - DM Sans and Inter font families
- **Consistent Spacing** - Standardized margins and paddings
- **Color Palette** - Carefully selected color scheme for marketplace UX

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://reactjs.org/docs) - Learn about React
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - Learn about TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
