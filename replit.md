# Wedding Invitation Web Application

## Overview

This is a modern, mobile-first wedding invitation web application built as a single-page application (SPA). The application features a romantic Korean-language wedding invitation for Seong Jun and Yeon Su, with elegant animations, a photo gallery, location details, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom wedding theme colors and shadcn/ui components
- **Animations**: Framer Motion for smooth, elegant transitions and animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **UI Components**: Radix UI primitives with custom shadcn/ui styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: Hot reload with Vite integration in development mode
- **Build Strategy**: ESBuild for server-side bundling

### Key Components

#### Frontend Structure
- **Main App**: Single-page wedding invitation with splash screen
- **Sections**: Hero, Wedding Details, Gallery, Location, Contact
- **Components**: Reusable UI components using shadcn/ui design system
- **Responsive Design**: Mobile-first approach with elegant desktop scaling

#### Backend Structure
- **Routes**: Express router with API prefix (`/api`)
- **Storage**: Abstracted storage interface with in-memory implementation
- **Database Schema**: User management with Drizzle ORM
- **Session Management**: PostgreSQL session store with connect-pg-simple

## Data Flow

1. **Client-Side Rendering**: React application renders wedding invitation content
2. **API Communication**: Future API endpoints will use REST architecture
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Asset Management**: Static assets served through Vite in development, built assets in production

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18, React DOM, React Query
- **UI/UX**: Radix UI primitives, Framer Motion, Tailwind CSS
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: Vite, TypeScript, ESBuild
- **Session Management**: connect-pg-simple for PostgreSQL sessions

### Wedding-Specific Features
- **Fonts**: Google Fonts (Noto Sans KR, Dancing Script)
- **Icons**: Font Awesome 6.0
- **Images**: Unsplash stock photos for gallery and backgrounds
- **Maps Integration**: Links to Korean map services (T Map, Naver Map, Kakao Map)

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **API Server**: Express server with TypeScript compilation via tsx
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild compiles server code to `dist/index.js`
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Environment**: NODE_ENV=production for optimized performance

### Configuration Notes
- **Database**: Requires DATABASE_URL environment variable
- **Replit Integration**: Includes Replit-specific plugins and error handling
- **Mobile Optimization**: Viewport meta tag prevents zooming on mobile devices
- **Korean Language**: HTML lang attribute set to "ko" for proper localization

### Theme Customization
The application uses a custom wedding theme with warm, romantic colors:
- Warm Gold (#B8A082)
- Warm Brown (#8B4513)
- Cream (#E8D5B7)
- Soft White (#FAF8F4)
- Charcoal (#2E2E2E)
- Soft Rose (#D4A5A5)

The design emphasizes elegance and romance, suitable for a Korean wedding invitation with both Korean and English text elements.