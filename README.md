# Real Scout: Find Your Dream Property 🏡✨

## ✨ Overview

Welcome to **Real Scout**, a modern and elegant mobile application for discovering, searching, and exploring real estate properties. Built with React Native and Expo, this app provides a seamless cross-platform experience for property seekers and real estate enthusiasts. It integrates with Appwrite as a comprehensive backend service for authentication, property management, and user data. With a beautiful UI powered by NativeWind and smooth navigation through Expo Router, Real Scout delivers a premium property browsing experience.

## 🔋 Key Features

- 🏠 **Property Discovery** — Browse featured and latest properties with beautiful card layouts and smooth scrolling.
- 🔍 **Smart Search** — Search properties by name or location with real-time filtering capabilities.
- 🏷️ **Property Filters** — Filter properties by type (All, House, Condo, Villa) for targeted searching.
- 🔐 **Google OAuth Login** — Secure authentication using Google Sign-In via Appwrite.
- 📱 **Cross-Platform** — Works seamlessly on iOS, Android, and web with a single codebase.
- 🎨 **Modern UI/UX** — Beautiful interface built with NativeWind (Tailwind CSS for React Native) with custom animations and transitions.
- 🗂️ **Tab Navigation** — Intuitive bottom tab navigation with Home, Explore, and Profile sections.
- 🏘️ **Detailed Property Info** — View comprehensive property details including:
  - High-quality property images and gallery
  - Property ratings and reviews
  - Price, area, bedrooms, and bathrooms
  - Available facilities (Gym, Swimming Pool, Parking, WiFi, etc.)
  - Property location with geolocation
  - Agent contact information
- 👥 **Agent Profiles** — View agent information with contact details and avatar.
- ⭐ **User Reviews** — Read reviews and ratings from other users for each property.
- 💚 **Favorite Properties** — Save your favorite properties with heart icon (UI ready).
- 👤 **User Profile** — Manage your profile with personalized settings and logout functionality.
- ⚡ **Fast Performance** — Optimized with Expo's new architecture for blazing-fast rendering.
- 🎯 **Type-Safe** — Built with TypeScript for better code quality and developer experience.

## 🧑‍💻 How It Works

1. **User opens the app** and lands on the Sign-In screen with beautiful onboarding UI.
2. **Google Authentication** allows secure login using OAuth2 via Appwrite backend.
3. **Home screen** displays featured properties carousel and latest property listings in a grid layout.
4. **Search functionality** enables users to find specific properties with debounced input for optimal performance.
5. **Filter system** lets users narrow down results by property type (House, Condo, Villa).
6. **User taps on a property card** to view detailed information including gallery, agent info, facilities, and reviews.
7. **Explore tab** provides an alternative browsing experience with advanced search and filtering.
8. **Profile section** shows user information with avatar and allows account management.
9. **Navigation system** uses Expo Router for smooth, native-feeling transitions between screens.
10. **Custom hooks (useAppwrite)** manage Appwrite API calls with loading states and error handling.
11. **Global state management** with GlobalProvider maintains authentication state across the app.
12. **NativeWind styling** provides responsive, utility-first CSS with Tailwind syntax.

## ⚙️ Tech Stack

- ⚛️ **React Native 0.81.5** (Mobile Framework)
- 🎯 **Expo ~54.0** (Development Platform)
- 🎨 **NativeWind 4.2** (Tailwind CSS for React Native)
- 🎭 **TypeScript ~5.9** (Type Safety)
- 🗄️ **Appwrite** (Backend as a Service)
- 🔐 **Google OAuth 2.0** (Authentication)

## 📚 Real Scout Resources

- 🌐 **Project Repository**: [GitHub Link](https://github.com/LouisFernando1204/realestate-app)
- 🗄️ **Appwrite Console**: [Appwrite Cloud](https://cloud.appwrite.io/)

## 🚀 Getting Started

Follow these steps to get Real Scout up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Appwrite Account](https://appwrite.io/) (for backend services)
- iOS Simulator (Mac only) or Android Emulator or physical device

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LouisFernando1204/realestate-app
   cd realestate-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add:

   ```env
   # Appwrite Configuration
   EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=your_properties_collection_id
   EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=your_agents_collection_id
   EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=your_reviews_collection_id
   EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=your_galleries_collection_id
   ```

4. **Set up Appwrite:**
   - Create a project on [Appwrite Cloud](https://cloud.appwrite.io/)
   - Enable Google OAuth Provider in Authentication settings
   - Create a database for the app
   - Create the following collections:

     **Properties Collection:**
     - `name` (string, required)
     - `type` (string, required) - Values: "House", "Condo", "Villa", "Apartment"
     - `description` (string, required)
     - `address` (string, required)
     - `price` (integer, required)
     - `area` (integer, required)
     - `bedrooms` (integer, required)
     - `bathrooms` (integer, required)
     - `rating` (float, required)
     - `facilities` (string array) - Values: "Laundry", "Car Parking", "Sport Center", etc.
     - `geolocation` (string)
     - `image` (URL, required)
     - `agent` (relationship to Agents)
     - `reviews` (relationship to Reviews)
     - `gallery` (relationship to Gallery)

     **Agents Collection:**
     - `name` (string, required)
     - `email` (email, required)
     - `avatar` (URL, required)

     **Reviews Collection:**
     - `name` (string, required)
     - `avatar` (URL, required)
     - `review` (string, required)
     - `rating` (integer, required, 1-5)

     **Gallery Collection:**
     - `image` (URL, required)

   - Copy your project ID, database ID, and collection IDs to `.env`

5. **Seed the database (optional):**

   ```bash
   # Run the seed script to populate sample data
   npm run seed
   ```

6. **Start the development server:**

   ```bash
   npm start
   # or
   npx expo start
   ```

7. **Run the app:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

## 📱 App Structure

### Screens

- **Sign In** (`app/sign-in.tsx`) - Authentication screen with Google OAuth
- **Home** (`app/(root)/(tabs)/index.tsx`) - Display featured and latest properties with search
- **Explore** (`app/(root)/(tabs)/explore.tsx`) - Advanced property browsing with filters
- **Profile** (`app/(root)/(tabs)/profile.tsx`) - User profile and settings management
- **Property Details** (`app/(root)/properties/[id].tsx`) - Detailed property information with dynamic routing

### Components

- **FeaturedCard** (`components/Cards.tsx`) - Large horizontal card for featured properties
- **Card** (`components/Cards.tsx`) - Grid card component for property listings
- **Search** (`components/Search.tsx`) - Custom search input with debouncing
- **Filters** (`components/Filters.tsx`) - Property type filter buttons
- **Comment** (`components/Comment.tsx`) - Review card component for user reviews
- **NoResults** (`components/NoResults.tsx`) - Empty state component for no search results

### Services & Utilities

- **appwrite.ts** (`lib/appwrite.ts`) - Appwrite backend integration with CRUD operations
- **useAppwrite.ts** (`lib/useAppwrite.ts`) - Custom hook for data fetching with loading/error states
- **global-provider.tsx** (`lib/global-provider.tsx`) - Global context for authentication and user state
- **seed.ts** (`lib/seed.ts`) - Database seeding script for sample data
- **data.ts** (`lib/data.ts`) - Static data and mock content

### Constants

- **icons.ts** (`constants/icons.ts`) - Icon asset exports
- **images.ts** (`constants/images.ts`) - Image asset exports
- **data.ts** (`constants/data.ts`) - Application constants and configurations

### Interfaces

- **interfaces.d.ts** (`interfaces/interfaces.d.ts`) - TypeScript type definitions for Property, Agent, Review, Gallery, and Facility

## 🎨 Features Overview

### Authentication

- Google Sign-In with OAuth 2.0
- Secure session management
- Auto-redirect for authenticated users
- Beautiful onboarding UI

### Home Screen

- User greeting with profile avatar
- Featured properties horizontal carousel
- Latest properties grid layout
- Real-time search with debouncing
- Property type filters (All, House, Condo, Villa)
- Pull-to-refresh functionality
- View all featured properties link

### Property Details

- Full-screen property image
- Property name, type, and address
- Price and rating display
- Property specifications (area, bedrooms, bathrooms)
- Facilities with icons (Gym, Pool, Parking, WiFi, etc.)
- Property description
- Image gallery
- Agent information with contact button
- User reviews and ratings section
- Back navigation

### Explore Screen

- Advanced search interface
- Filter by property type
- Grid layout for results
- Empty state handling
- Loading indicators

### Profile Screen

- User information display
- Profile avatar
- Account settings
- Logout functionality
- App preferences

### Navigation

- Custom bottom tab bar with animated icons
- Smooth transitions between screens
- Dynamic routing for property details
- Protected routes with authentication check
- Stack navigation for nested screens

## 🛠️ Available Scripts

```bash
# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web

# Run linter
npm run lint
```

## 🔧 Configuration Files

- `app.json` - Expo configuration with app metadata
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript compiler configuration
- `babel.config.js` - Babel transpiler configuration
- `metro.config.js` - Metro bundler configuration
- `eslint.config.js` - ESLint rules and code quality standards
- `nativewind-env.d.ts` - NativeWind type definitions
- `expo-env.d.ts` - Expo environment type definitions

## 📦 Key Dependencies

```json
{
  "expo": "~54.0.33",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo-router": "~6.0.23",
  "nativewind": "^4.2.1",
  "react-native-appwrite": "^0.20.0",
  "react-native-reanimated": "~4.1.1",
  "react-native-gesture-handler": "~2.28.0",
  "use-debounce": "^10.1.0",
  "@expo/vector-icons": "^15.0.3",
  "expo-font": "~14.0.11",
  "typescript": "~5.9.2"
}
```

## 🗂️ Project Structure

```
realestate-app/
├── app/                          # Application screens and routing
│   ├── _layout.tsx              # Root layout with providers
│   ├── sign-in.tsx              # Authentication screen
│   ├── global.css               # Global styles
│   └── (root)/                  # Protected routes
│       ├── _layout.tsx          # Protected layout
│       ├── (tabs)/              # Tab navigation
│       │   ├── _layout.tsx      # Tab bar configuration
│       │   ├── index.tsx        # Home screen
│       │   ├── explore.tsx      # Explore screen
│       │   └── profile.tsx      # Profile screen
│       └── properties/
│           └── [id].tsx         # Property details (dynamic route)
├── assets/                      # Static assets
│   ├── fonts/                   # Custom fonts (Rubik family)
│   ├── icons/                   # UI icons
│   └── images/                  # App images
├── components/                  # Reusable components
│   ├── Cards.tsx               # Property card components
│   ├── Search.tsx              # Search input component
│   ├── Filters.tsx             # Filter buttons
│   ├── Comment.tsx             # Review component
│   └── NoResults.tsx           # Empty state component
├── constants/                   # App constants
│   ├── icons.ts                # Icon exports
│   ├── images.ts               # Image exports
│   └── data.ts                 # Static data
├── interfaces/                  # TypeScript definitions
│   └── interfaces.d.ts         # Type declarations
├── lib/                        # Business logic and utilities
│   ├── appwrite.ts             # Appwrite SDK integration
│   ├── useAppwrite.ts          # Custom fetch hook
│   ├── global-provider.tsx     # Global state provider
│   ├── seed.ts                 # Database seeding
│   └── data.ts                 # Sample data
└── Configuration files
```

## 🎯 Key Appwrite Functions

### Authentication

- `login()` - Google OAuth authentication
- `logout()` - User logout
- `getCurrentUser()` - Fetch current user data

### Properties

- `getLatestProperties()` - Fetch latest 5 properties
- `getProperties()` - Fetch properties with search and filter
- `getPropertyById(id)` - Fetch single property with relations

### Agents

- `getAgentById(id)` - Fetch agent information

### Reviews

- `getReviewsByPropertyId(propertyId)` - Fetch property reviews

## 💡 Features in Development

- 📍 **Map Integration** - View properties on an interactive map
- 💾 **Favorites System** - Save and manage favorite properties
- 📞 **Direct Messaging** - Chat with agents directly
- 🔔 **Push Notifications** - Get alerts for new properties
- 📊 **Price Tracking** - Track property price changes
- 🏦 **Mortgage Calculator** - Calculate mortgage payments
- 📅 **Tour Scheduling** - Schedule property viewings
- 🌙 **Dark Mode** - Dark theme support

## 🤝 Contributor

- 🧑‍💻 **Louis Fernando** : [@LouisFernando1204](https://github.com/LouisFernando1204)
